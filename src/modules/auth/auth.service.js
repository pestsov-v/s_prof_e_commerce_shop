const User = require("../user/User.model");
const { handleHashedToken } = require("./auth.helper");

exports.findUserService = async (email) => {
  return await User.findOne({ email }).select("+password");
};

exports.findEmailService = async (email) => {
  return await User.findOne({ email });
};

exports.resetPasswordService = async (token) => {
  const hashedToken = handleHashedToken(token);
  return await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
};

exports.saveNewPasswordService = async (user, password, passwordConfirm) => {
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  return await user.save();
};
