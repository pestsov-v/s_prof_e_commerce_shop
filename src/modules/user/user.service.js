const User = require("./User.model");

exports.responseObj = (user, statusCode, message, res) => {
  return res.status(statusCode).json({
    status: "sucess",
    message: message,
    data: {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
  });
};

exports.deactivatedUserService = async (id) => {
  return await User.findByIdAndUpdate(id, {
    active: false,
  });
};

exports.reactivatedUserService = async (id) => {
  return await User.findByIdAndUpdate(id, {
    active: true,
  });
};
