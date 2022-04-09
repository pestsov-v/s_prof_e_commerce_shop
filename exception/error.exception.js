const dublicateEmail = {
  message: "Пользователь с данным Email уже существует",
  statusCode: 409,
};

const emptyFields = {
  message: "Пожалуйста заполните все поля",
  statusCode: 400,
};

module.exports = { dublicateEmail, emptyFields };
