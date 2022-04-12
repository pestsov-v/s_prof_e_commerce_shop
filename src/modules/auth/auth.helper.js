const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const ExceptionFilter = require("../../core/filter/ExceptionFilter");
const {
  emptyFields,
  incorrectPassword,
  dublicateEmail,
} = require("./auth.exception");

exports.confirmPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const signToken = (id) => {
  return (token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }));
};

exports.createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.headers["x-forwarded-proto"] === "https",
  });

  user.password = undefined;

  return res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

exports.handleHashedToken = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

exports.handleDuplicateEmail = () => {
  return new ExceptionFilter(dublicateEmail.message, dublicateEmail.statusCode);
};

exports.handleEmptyFields = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Заполнены не все обязательные поля. ${errors.join(". ")}`;

  return new ExceptionFilter(message, 400);
};

exports.authNotFound = () => {
  return new ExceptionFilter(emptyFields.message, emptyFields.statusCode);
};

exports.authIncorrectPassword = () => {
  return new ExceptionFilter(
    incorrectPassword.message,
    incorrectPassword.statusCode
  );
};
