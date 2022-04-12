const AppError = require("../../core/filter/AppFilter");
const { notFound } = require("./user.excection");

exports.userNotFound = () => {
  return new AppError(notFound.message, notFound.statusCode);
};
