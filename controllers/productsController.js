const productsService = require('../services/productsService');

const HTTP_CREATED = 201;

const create = async (req, res) => {
  const { name, quantity } = req.body;

  const products = await productsService
    .create({ name, quantity });

  res.status(HTTP_CREATED).json(products);
};

module.exports = {
  create,
};