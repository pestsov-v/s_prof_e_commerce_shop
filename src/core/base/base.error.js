const status = require("../enums/status.enum");

class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? status.fail : status.error;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  static docNotFound() {
    return new BaseError("Нет документa з данным ID", 404);
  }
}

module.exports = BaseError;
