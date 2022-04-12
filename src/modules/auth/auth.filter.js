const AppError = require("../../core/filter/AppFilter");

class AuthError extends AppError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  emptyFields(err) {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Заполнены не все обязательные поля. ${errors.join(". ")}`;
    return new AppError(message, 400);
  }

  notFound() {
    return new AppError("Вы не указали почту или пароль", 400);
  }

  notLoggin() {
    return new AppError(
      "Вы не залогинились! Пожалуйста ввойдите в вашу учётную запись",
      401
    );
  }

  loggedAgain() {
    return new AppError(
      "Пользователь недавно изменил пароль. Пожалуйста ввойдите ещё раз",
      401
    );
  }

  incorrectPassword() {
    return new AppError("Неверная почта или пароль", 403);
  }

  incorrectToken() {
    return new AppError(
      "Токен, который Вам принадлежит, больше не существует",
      403
    );
  }

  badToken() {
    return new AppError("Неверный токен или его срок годности истёк", 403);
  }

  hasNotRule() {
    return new AppError(
      "Вы не владеете достаточными правами для совершения подобных действий",
      403
    );
  }

  notUser() {
    return new AppError(
      "Не существует пользователя с данным email адресом",
      404
    );
  }

  duplicateEmail() {
    return new AuthError("Пользователь с данным Email уже существует", 409);
  }

  serverError() {
    return new AppError(
      "При отправке сообщения произошла ошибка. Пожалуйста попробуйтe позже",
      500
    );
  }
}

module.exports = new AuthError();
