const ExceptionFilter = require("../../core/ExceptionFilter");
const { dublicateEmail, emptyFields } = require("./error.exceptions");
const notFound = require("../../core/crud/crud.exception");

const handleDuplicateEmail = () => {
  return new ExceptionFilter(dublicateEmail.message, dublicateEmail.statusCode);
};

const handleEmptyFields = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Заполнены не все обязательные поля. ${errors.join(". ")}`;

  return new ExceptionFilter(message, emptyFields.statusCode);
};

const handleNotFound = () => {
  return new ExceptionFilter(notFound.message, notFound.statusCode);
};

module.exports = { handleDuplicateEmail, handleEmptyFields, handleNotFound };
