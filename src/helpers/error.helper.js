const ExceptionFilter = require("../exception/ExceptionFilter");
const { dublicateEmail, emptyFields } = require("../exception/error.exception");
const notFound = require("../exception/crud.exception");

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
