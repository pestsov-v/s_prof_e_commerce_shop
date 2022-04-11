const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const ExceptionFilter = require("../../core/filter/ExceptionFilter");
const {
  loggedAgain,
  incorrectToken,
  notLoggin,
  hasNotRule,
} = require("./auth.exception");
const { changedPasswordAfter } = require("./auth.helper");
const User = require("../user/User.model");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ExceptionFilter(notLoggin.message, notLoggin.statusCode));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new ExceptionFilter(incorrectToken.message, incorrectToken.statusCode)
    );
  }

  if (changedPasswordAfter(decoded.iat)) {
    return next(
      new ExceptionFilter(loggedAgain.message, loggedAgain.statusCode)
    );
  }

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ExceptionFilter(hasNotRule.message, hasNotRule.statusCode)
      );
    }

    next();
  };
};
