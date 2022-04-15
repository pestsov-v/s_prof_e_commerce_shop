const Email = require("@email/Email.js");
const AuthError = require("./auth.error");
const AuthService = require("./auth.service");
const AuthHelper = require("./auth.helper");

class AuthController {
  async signup(req, res, next) {
    try {
      const newUser = await AuthService.createUser(req.body);

      const url = `${req.protocol}://${req.get("host")}/api/v1/login`;
      await new Email(newUser, url).sendWelcome();

      AuthHelper.createSendToken(newUser, 201, req, res);
    } catch (e) {
      if (e.code === 11000) return next(AuthError.duplicateEmail());
      if (e.errors) return next(AuthError.emptyFields(e));
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await AuthService.findUser(email);

    if (!email || !password) return next(AuthError.notFound());

    if (user) {
      const correctPassword = await AuthHelper.confirmPassword(
        password,
        user.password
      );

      if (correctPassword) {
        req.session.user = user;
        req.session.isAuthenticated = true;
      } else {
        return next(AuthError.incorrectPassword());
      }
    }

    AuthHelper.createSendToken(user, 200, req, res);
  }

  logout(req, res) {
    res.cookie("jwt", "loggedout", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    req.session.destroy();

    res.status(200).json({
      status: "success",
      message: "Пользователь успешно вышел",
    });
  }

  async forgotPassword(req, res, next) {
    const user = await AuthService.findEmail(req.body.email);
    if (!user) return next(AuthError.notUser);

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

      return next(AuthError.serverError());
    }
  }

  async resetPassword(req, res, next) {
    const { password, passwordConfirm } = req.body;
    const user = await AuthService.resetPassword(req.params.token);

    if (!user) return next(AuthError.badToken());

    await AuthService.changedPassword(user, password, passwordConfirm);
    AuthHelper.createSendToken(user, 200, req, res);
  }
}

module.exports = new AuthController();
