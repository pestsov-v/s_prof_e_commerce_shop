const ExceptionFilter = require("../filter/ExceptionFilter");
const notFound = require("../../core/crud/crud.exception");

const handleNotFound = () => {
  return new ExceptionFilter(notFound.message, notFound.statusCode);
};

module.exports = { handleNotFound };
