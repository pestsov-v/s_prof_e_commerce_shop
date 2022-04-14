const BaseError = require("@base/base.error");

class UserError extends BaseError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  notFoundUser() {
    return new UserError("Такого пользователя не существует", 404);
  }

  notFoundEmail() {
    return new UserError(
      "Не существует пользователя с данным email адресом",
      404
    );
  }
}

module.exports = new UserError();
