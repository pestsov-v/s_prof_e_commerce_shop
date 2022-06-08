const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { promisify } = require("util");
const status = require("../../core/enums/status.enum");

const signToken = (id) => {
  return (token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }));
};

class AuthHelper {
  hashedToken(token) {
    return crypto.createHash("sha256").update(token).digest("hex");
  }

  async confirmPassword(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
  }

  createSendToken(user, statusCode, req, res) {
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
      status: status.success,
      token,
      data: {
        user,
      },
    });
  }

  changedPasswordAfter(JWTTimestamp) {
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(
        this.passwordChangedAt.getTime() / 1000,
        10
      );
      return JWTTimestamp < changedTimestamp;
    }

    return false;
  }

  authorizationToken(authorization) {
    if (authorization && authorization.startsWith("Bearer")) {
      return (token = authorization.split(" ")[1]);
    }
  }

  async decoded(token) {
    return await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  }
}

module.exports = new AuthHelper();
