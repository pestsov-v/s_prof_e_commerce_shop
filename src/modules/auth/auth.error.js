const BaseError = require("../../core/base/base.error");

class AuthError extends BaseError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  emptyFields(err) {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Заполнены не все обязательные поля. ${errors.join(". ")}`;
    return new BaseError(message, 400);
  }

  notFound() {
    return new AuthError("Вы не указали почту или пароль", 400);
  }

  notLoggin() {
    return new AuthError(
      "Вы не залогинились! Пожалуйста ввойдите в вашу учётную запись",
      401
    );
  }

  loggedAgain() {
    return new AuthError(
      "Пользователь недавно изменил пароль. Пожалуйста ввойдите ещё раз",
      401
    );
  }

  incorrectPassword() {
    return new AuthError("Неверная почта или пароль", 403);
  }

  incorrectToken() {
    return new AuthError(
      "Токен, который Вам принадлежит, больше не существует",
      403
    );
  }

  badToken() {
    return new AuthError("Неверный токен или его срок годности истёк", 403);
  }

  hasNotRule() {
    return new AuthError(
      "Вы не владеете достаточными правами для совершения подобных действий",
      403
    );
  }

  notUser() {
    return new AuthError(
      "Не существует пользователя с данным email адресом",
      404
    );
  }

  duplicateEmail() {
    return new AuthError("Пользователь с данным Email уже существует", 409);
  }

  serverError() {
    return new AuthError(
      "При отправке сообщения произошла ошибка. Пожалуйста попробуйтe позже",
      500
    );
  }
}

module.exports = new AuthError();
