const ExceptionFilter = require("../../core/ExceptionFilter");
const { notFound } = require("./user.excection");

exports.userNotFound = () => {
  return new ExceptionFilter(notFound.message, notFound.statusCode);
};


