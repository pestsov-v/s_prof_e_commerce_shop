const BaseError = require("../../core/base/base.error");
const statusCode = require("../../core/statusCode.enum");

const {
  NOT_FOUND_EMAIL_MESSAGE,
  NOT_FOUND_USER_MESSAGE,
} = require("./constants/user.constants");

class UserError extends BaseError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  notFoundUser() {
    return new UserError(NOT_FOUND_USER_MESSAGE, statusCode.notFound);
  }

  notFoundEmail() {
    return new UserError(NOT_FOUND_EMAIL_MESSAGE, statusCode.notFound);
  }
}

module.exports = new UserError();
