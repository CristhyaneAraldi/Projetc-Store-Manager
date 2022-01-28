const salesService = require('../services/salesService');
const { HTTP_CREATED } = require('../utils/statusCodes');

const create = async (req, res, next) => {
  const newSale = req.body;

  try {
    const sales = await salesService.create(newSale);
    return res.status(HTTP_CREATED).json(sales);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};