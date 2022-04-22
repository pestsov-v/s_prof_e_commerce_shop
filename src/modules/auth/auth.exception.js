exports.notFoundException = {
  message: "Вы не указали почту или пароль",
  statusCode: 400,
};

exports.notLogginException = {
  message: "Вы не залогинились! Пожалуйста ввойдите в вашу учётную запись",
  statusCode: 401,
};

exports.loggedAgainException = {
  message: "Пользователь недавно изменил пароль. Пожалуйста ввойдите ещё ра",
  statusCode: 401,
};

exports.incorrectPasswordException = {
  message: "Неверная почта или пароль",
  statusCode: 403,
};

exports.incorrectTokenException = {
  message: "Токен, который Вам принадлежит, больше не существует",
  statusCode: 403,
};

exports.badTokenException = {
  message: "Неверный токен или его срок годности истёк",
  statusCode: 403,
};

exports.hasNotRuleException = {
  message:
    "Вы не владеете достаточными правами для совершения подобных действий",
  statusCode: 403,
};

exports.notUserException = {
  message: "Не существует пользователя с данным email адресом",
  statusCode: 404,
};

exports.duplicateEmailException = {
  message: "Пользователь с данным Email уже существует",
  statusCode: 409,
};

exports.serverErrorException = {
  message:
    "При отправке сообщения произошла ошибка. Пожалуйста попробуйтe позже",
  statusCode: 500,
};
