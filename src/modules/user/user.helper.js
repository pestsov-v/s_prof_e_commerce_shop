const status = require("../../core/status.enum");

class UserHelper {
  responseObj(user, statusCode, message, res) {
    return res.status(statusCode).json({
      status: status.success,
      message: message,
      data: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    });
  }
}

module.exports = new UserHelper();
