const User = require("../user/User.model");
const AuthHelper = require("./auth.helper");

class AuthService {
  async createUser(body) {
    return await User.create(body);
  }

  async findUser(email) {
    return await User.findOne({ email }).select("+password");
  }

  async findEmail(email) {
    return await User.findOne({ email });
  }

  async resetPassword(token) {
    const hashedToken = AuthHelper.hashedToken(token);

    return await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
  }

  async changedPassword(user, password, passwordConfirm) {
    user.password = password;
    user.passwordConfirm = passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    return await user.save();
  }

  async decodedCurrentUser(id) {
    return User.findById(id);
  }
}

module.exports = new AuthService();
