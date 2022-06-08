const User = require("./User.model");
const BaseService = require("../../core/base/base.service");

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

  async changedUserToManager(id) {
    return await User.findByIdAndUpdate(id, {
      role: "manager",
    });
  }
}

module.exports = new UserService();
