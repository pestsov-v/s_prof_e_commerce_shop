const statusCode = require("../../core/enums/statusCode.enum");

const {
  NOT_FOUND_EXCEPTION_MESSAGE,
  NOT_LOGGIN_EXCEPTION_MESSAGE,
  LOGGED_AGAIN_EXCEPTION_MESSAGE,
  INCORRECT_PASSWORD_EXCEPTION,
  INCORRECT_TOKEN_EXCEPTION_MESSAGE,
  BAD_TOKEN_EXCEPTION_MESSAGE,
  HAS_NOT_RULE_EXCEPTION_MESSAGE,
  NOT_USER_EXCEPTION_MESSAGE,
  DUBPLICATE_EMAIL_EXCEPTION_MESSAGE,
  SERVER_ERROR_EXCEPTION_MESSAGE,
} = require("./auth.constants");

exports.notFoundException = {
  message: NOT_FOUND_EXCEPTION_MESSAGE,
  statusCode: statusCode.badRequest,
};

exports.notLogginException = {
  message: NOT_LOGGIN_EXCEPTION_MESSAGE,
  statusCode: statusCode.unauthorized,
};

exports.loggedAgainException = {
  message: LOGGED_AGAIN_EXCEPTION_MESSAGE,
  statusCode: statusCode.unauthorized,
};

exports.incorrectPasswordException = {
  message: INCORRECT_PASSWORD_EXCEPTION,
  statusCode: statusCode.forbidden,
};

exports.incorrectTokenException = {
  message: INCORRECT_TOKEN_EXCEPTION_MESSAGE,
  statusCode: statusCode.forbidden,
};

exports.badTokenException = {
  message: BAD_TOKEN_EXCEPTION_MESSAGE,
  statusCode: statusCode.forbidden,
};

exports.hasNotRuleException = {
  message: HAS_NOT_RULE_EXCEPTION_MESSAGE,
  statusCode: statusCode.forbidden,
};

exports.notUserException = {
  message: NOT_USER_EXCEPTION_MESSAGE,
  statusCode: statusCode.notFound,
};

exports.duplicateEmailException = {
  message: DUBPLICATE_EMAIL_EXCEPTION_MESSAGE,
  statusCode: statusCode.conflict,
};

exports.serverErrorException = {
  message: SERVER_ERROR_EXCEPTION_MESSAGE,
  statusCode: statusCode.serverError,
};
