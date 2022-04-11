const ExceptionFilter = require("../core/ExceptionFilter");
const { dublicateEmail, emptyFields } = require("./error.exceptions");
const notFound = require("../../core/crud/crud.exception");

const handleDuplicateEmail = () => {
  return new ExceptionFilter(dublicateEmail.message, dublicateEmail.statusCode);
};

const handleEmptyFields = () => {
  return new ExceptionFilter(emptyFields.message, emptyFields.statusCode);
};

const handleNotFound = () => {
  return new ExceptionFilter(notFound.message, notFound.statusCode);
};

module.exports = { handleDuplicateEmail, handleEmptyFields, handleNotFound };
