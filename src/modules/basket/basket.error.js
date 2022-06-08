const BaseError = require("../../core/base/base.error");
const statusCode = require("../../core/enums/statusCode.enum");

const { NOT_UNAUTHORIZED_MESSAGE } = require("./basket.constants");

class BasketError extends BaseError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  hasNotSession() {
    return new BasketError(NOT_UNAUTHORIZED_MESSAGE, statusCode.forbidden);
  }
}

module.exports = new BasketError();
