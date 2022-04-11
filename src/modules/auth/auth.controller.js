const User = require("../user/User.model");
const jwt = require("jsonwebtoken");
const {
  handleDuplicateEmail,
  handleEmptyFields,
} = require("../error/error.helper");

const signToken = (id) => {
  return (token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }));
};

const createSendToken = (user, statusCode, req, res) => {
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