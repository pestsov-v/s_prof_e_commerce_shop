const User = require("../user/User.model");
const {
  createSendToken,
  authNotFound,
  authIncorrectPassword,
  confirmPassword,
} = require("./auth.helper");
const {
  handleDuplicateEmail,
  handleEmptyFields,
} = require("../error/error.helper");
const { findUserService } = require("./auth.service");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
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
