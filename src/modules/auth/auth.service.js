const User = require("../user/User.model");

exports.findUserService = async (email) => {
  return await User.findOne({ email }).select("+password");
};

exports.findEmailService = async (email) => {
  return await User.findOne({ email });
};
