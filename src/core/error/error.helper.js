const BaseError = require("../base/base.error");
const notFound = require("../../core/crud/crud.exception");

const handleNotFound = () => {
  return new BaseError(notFound.message, notFound.statusCode);
};

module.exports = { handleNotFound };
