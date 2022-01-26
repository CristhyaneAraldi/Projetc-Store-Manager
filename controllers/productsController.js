const productsService = require('../services/productsService');
const { HTTP_OK, HTTP_CREATED } = require('../utils/statusCodes');

const readProducts = async (_req, res, next) => {
  try {
    const products = await productsService.readProducts();
    return res.status(HTTP_OK).json(products);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const { name, quantity } = req.body;
  
  try {
    const products = await productsService.create({ name, quantity });
    
      if (products.status) {
        return res.status(products.status).json({ message: products.message });
      }
    
    return res.status(HTTP_CREATED).json(products);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await productsService.getById(id);

    if (product.status) {
      return res.status(product.status).json({ message: product.message });
    }

    return res.status(HTTP_OK).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readProducts,
  create,
  getById,
};