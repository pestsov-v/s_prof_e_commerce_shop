const BaseError = require("../../core/base/base.error");
const {
  notFoundException,
  incorrectPasswordException,
  notLogginException,
  loggedAgainException,
  incorrectTokenException,
  badTokenException,
  hasNotRuleException,
  notUserException,
  duplicateEmailException,
  serverErrorException,
} = require("./auth.exception");

class AuthError extends BaseError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }

  emptyFields(err) {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Заполнены не все обязательные поля. ${errors.join(". ")}`;
    return new AuthError(message, 400);
  }

  notFound() {
    return new AuthError(
      notFoundException.message,
      notFoundException.statusCode
    );
  }

  notLoggin() {
    return new AuthError(
      notLogginException.message,
      notLogginException.statusCode
    );
  }

  loggedAgain() {
    return new AuthError(
      loggedAgainException.message,
      loggedAgainException.statusCode
    );
  }

  incorrectPassword() {
    return new AuthError(
      incorrectPasswordException.message,
      incorrectPasswordException.statusCode
    );
  }

  incorrectToken() {
    return new AuthError(
      incorrectTokenException.message,
      incorrectTokenException.statusCode
    );
  }

  badToken() {
    return new AuthError(
      badTokenException.message,
      badTokenException.statusCode
    );
  }

  hasNotRule() {
    return new AuthError(
      hasNotRuleException.message,
      hasNotRuleException.statusCode
    );
  }

  notUser() {
    return new AuthError(
      notUserException.message,
      notFoundException.statusCode
    );
  }

  duplicateEmail() {
    return new AuthError(
      duplicateEmailException.message,
      duplicateEmailException.statusCode
    );
  }

  serverError() {
    return new AuthError(
      serverErrorException.message,
      serverErrorException.statusCode
    );
  }
}

module.exports = new AuthError();
