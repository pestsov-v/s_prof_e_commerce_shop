const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const User = require("../user/User.model");
const AuthError = require("./auth.filter");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(AuthError.notLoggin());
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(AuthError.incorrectPassword());
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(AuthError.loggedAgain());
  }

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    console.log(req.user);
    console.log(roles);
    if (!roles.includes(req.user.role)) {
      return next(AuthError.hasNotRule());
    }

    next();
  };
};
