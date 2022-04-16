const BaseError = require("../../core/base/base.error");

class BasketError extends BaseError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  hasNotSession() {
    return new BasketError("Вы не авторизировались на сайте", 403);
  }
}

module.exports = new BasketError();
