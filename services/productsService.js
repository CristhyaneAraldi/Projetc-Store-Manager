const productsModel = require('../models/productsModel');

const create = async ({ name, quantity }) => {
  const products = await productsModel.create(name, quantity);

  return products;
};

module.exports = {
  create,
};