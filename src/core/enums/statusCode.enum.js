const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const SERVER_ERROR = 500;

const statusCode = {
  ok: OK,
  created: CREATED,
  badRequest: BAD_REQUEST,
  unauthorized: UNAUTHORIZED,
  forbidden: FORBIDDEN,
  notFound: NOT_FOUND,
  conflict: CONFLICT,
  serverError: SERVER_ERROR,
};

module.exports = statusCode;
