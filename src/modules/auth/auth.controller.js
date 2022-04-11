const crypto = require("crypto");

const User = require("../user/User.model");
const {
  findUserService,
  findEmailService,
  resetPasswordService,
  saveNewPasswordService,
} = require("./auth.service");
const {
  createSendToken,
  authNotFound,
  authIncorrectPassword,
  confirmPassword,
  handleDuplicateEmail,
  handleEmptyFields,
  handleHashedToken,
} = require("./auth.helper");

const ExceptionFilter = require("../../core/filter/ExceptionFilter");
const { sendError, notUser, badToken } = require("./auth.exception");
const Email = require("../../core/email/Email");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    const url = `${req.protocol}://${req.get("host")}/api/v1/login`;
    await new Email(newUser, url).sendWelcome();

    createSendToken(newUser, 201, req, res);
  } catch (e) {
    console.log(e);
    if (e.code === 11000) {
      return next(handleDuplicateEmail());
    }

    if (e.errors) {
      return next(handleEmptyFields(e));
    }
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserService(email);

  if (!email || !password) {
    return next(authNotFound());
  }

  const correctPassword = await confirmPassword(password, user.password);

  if (correctPassword === false) {
    return next(authIncorrectPassword());
  }

  createSendToken(user, 200, req, res);
};

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 100),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "Пользователь успешно вышел",
  });
};

exports.forgotPassword = async (req, res, next) => {
  const user = await findEmailService(req.body.email);
  if (!user) {
    return next(new ExceptionFilter(notUser.message, notUser.statusCode));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/password/${resetToken}`;
    await new Email(user, resetUrl).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Токен отправлен на почту",
    });
  } catch (e) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ExceptionFilter(sendError.message, sendError.statusCode));
  }
};

exports.resetPassword = async (req, res, next) => {
  const { password, passwordConfirm } = req.body;
  const user = await resetPasswordService(req.params.token);

  if (!user) {
    return next(new ExceptionFilter(badToken.message, badToken.statusCode));
  }
  await saveNewPasswordService(user, password, passwordConfirm);
  createSendToken(user, 200, req, res);
};
