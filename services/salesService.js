const salesModel = require('../models/salesModel');
const salesSchema = require('../schemas/salesSchema');
const errorConstructor = require('../utils/errorConstructor');
const { HTTP_UNPROCESSABLE_ENTITY, HTTP_BAD_REQUEST } = require('../utils/statusCodes');

const serialize = (newSale) => newSale.map((sale) => ({
  productId: sale.product_id,
  quantity: sale.quantity,
}));

const validateSales = ({ productId, quantity }) => {
  const { error } = salesSchema.validate({ productId, quantity });

  let errorStatus = HTTP_UNPROCESSABLE_ENTITY;
  if (error && (error.message === '"quantity" is required'
    || error.message === '"product_id" is required')) {
    errorStatus = HTTP_BAD_REQUEST;
  }
  if (error) throw errorConstructor(errorStatus, error.message);
};

const create = async (newSale) => {
  serialize(newSale).map(({ productId, quantity }) => validateSales({ productId, quantity }));

  const saleId = await salesModel.createSale();

  await Promise.all(newSale.map(async ({ product_id, quantity }) => {
    const createSale = await salesModel.createSalesProducts(saleId.id, product_id, quantity);
    return createSale;
  }));

  return {
    id: saleId,
    itemsSold: newSale,
  };
};

module.exports = {
  create,
};