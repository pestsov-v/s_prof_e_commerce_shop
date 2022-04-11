const ExceptionFilter = require("../../core/filter/ExceptionFilter");
const { notFound } = require("./user.excection");

exports.userNotFound = () => {
  return new ExceptionFilter(notFound.message, notFound.statusCode);
};


