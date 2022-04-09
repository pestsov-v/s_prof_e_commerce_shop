const User = require("../models/User.model");
const createSendToken = require("../helpers/auth.helper");
const {
  handleDuplicateValue,
  handleEmptyFields,
} = require("../helpers/error.helper.js");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    createSendToken(newUser, 201, req, res);
  } catch (e) {
    if (e.code === 11000) {
      return next(handleDuplicateValue());
    }

    if (e.errors) {
      return next(handleEmptyFields());
    }
  }
};
