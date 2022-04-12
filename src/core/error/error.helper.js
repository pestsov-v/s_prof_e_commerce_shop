const AppError = require("../filter/AppFilter");
const notFound = require("../../core/crud/crud.exception");

const handleNotFound = () => {
  return new AppError(notFound.message, notFound.statusCode);
};

module.exports = { handleNotFound };
