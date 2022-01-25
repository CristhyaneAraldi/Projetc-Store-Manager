const connection = require('./connection');

const create = async ({ name, quantity }) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [rows] = await connection.execute(
    query,
    [name, quantity],
  );

  return {
    id: rows.insertId,
    name,
    quantity,
  };
};

module.exports = {
  create,
};