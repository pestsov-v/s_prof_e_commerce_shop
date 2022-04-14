const User = require("./User.model");

const BaseService = require("@base/base.service");

class UserService extends BaseService {
  async deactivatedUser(id) {
    return await User.findByIdAndUpdate(id, {
      active: false,
    });
  }

  async reactivatedUser(id) {
    return await User.findByIdAndUpdate(id, {
      active: true,
    });
  }
}

module.exports = new UserService();
