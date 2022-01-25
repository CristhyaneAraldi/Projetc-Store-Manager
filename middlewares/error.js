const HTTP_INTERNAL_SERVER_ERROR = 500;

const errorMiddleware = (_req, res) => {
  res.status(HTTP_INTERNAL_SERVER_ERROR).end();
};

module.exports = errorMiddleware;
