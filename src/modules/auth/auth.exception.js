exports.emptyFields = {
  message: "Вы не указали почту или пароль",
  statusCode: 400,
};

exports.incorrectPassword = {
  message: "Неверная почта или пароль",
  statusCode: 403,
};

exports.notLoggin = {
  message: "Вы не залогинились! Пожалуйста ввойдите в вашу учётную запись",
  statusCode: 401,
};

exports.incorrectToken = {
  message: "Токен, который Вам принадлежит, больше не существует.",
  statusCode: 403,
};

exports.loggedAgain = {
  message: "Пользователь недавно изменил пароль. Пожалуйста ввойдите ещё раз",
  statusCode: 401,
};
