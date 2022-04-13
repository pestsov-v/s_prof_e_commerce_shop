const AuthError = require("./auth.error");
const AuthHelper = require("./auth.helper");
const AuthService = require("./auth.service");

class AuthMiddleware {
  async protect(req, res, next) {
    const { authorization } = req.headers;
    let token;
    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
    }

    if (!token) return next(AuthError.notLoggin());

    const decoded = await AuthHelper.decoded(token);
    const currentUser = await AuthService.decodedCurrentUser(decoded.id);

    if (!currentUser) return next(AuthError.incorrectPassword());

    const decodedUser = currentUser.changedPasswordAfter(decoded.iat);

    if (decodedUser) return next(AuthError.loggedAgain());

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  }

  restrictTo(...roles) {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) return next(AuthError.hasNotRule());

      next();
    };
  }
}

module.exports = new AuthMiddleware();
