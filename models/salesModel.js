const connection = require('./connection');

const createSale = async () => {
  const query = 'INSERT INTO sales (date) VALUES (CURRENT_DATE())';
  const [rows] = await connection.execute(query);

  return {
    id: rows.insertId,
  };
};

const createSalesProducts = async (saleId, productId, quantity) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
  const [rows] = await connection.execute(
    query,
    [saleId, productId, quantity],
  );

  return {
    saleId: rows.insertId,
    productId,
    quantity,
  };
};

module.exports = {
  createSale,
  createSalesProducts,
};