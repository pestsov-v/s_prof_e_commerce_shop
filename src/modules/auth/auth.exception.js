exports.dublicateEmail = {
  message: "Пользователь с данным Email уже существует",
  statusCode: 409,
};

exports.emptyFields = {
  message: "Вы не указали почту или пароль",
  statusCode: 400,
};

exports.incorrectPassword = {
  message: "Неверная почта или пароль",
  statusCode: 403,
};

exports.hasNotRule = {
  message:
    "Вы не владеете достаточными правами для совершения подобных действий",
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

exports.notUser = {
  message: "Не существует пользователя с данным email адресом",
  statusCode: 404,
};

exports.sendError = {
  message:
    "При отправке сообщения произошла ошибка. Пожалуйста попробуйтe позже",
  statusCode: 500,
};
