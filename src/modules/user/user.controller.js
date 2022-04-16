const UserHelper = require("./user.helper");
const UserError = require("./user.error");
const UserService = require("./user.service");
const User = require("./User.model");
const BaseController = require("../../core/base/base.controller");

class UserController {
  getUsers = BaseController.getAll(User);
  getUser = BaseController.getOne(User);
  updateUser = BaseController.updateOne(User);
  deleteUser = BaseController.deleteOne(User);

  async deactivatedUser(req, res, next) {
    const user = await UserService.deactivatedUser(req.params.id);

    if (user === null) return next(UserError.notFoundUser());

    const message = "Пользователь успешно деактивирован";

    return UserHelper.responseObj(user, 200, message, res);
  }

  async reactivatedUser(req, res, next) {
    const user = await UserService.reactivatedUser(req.params.id);

    if (user === null) return next(UserError.notFoundUser());

    const message = "Пользователь успешно восстановлен";

    return UserHelper.responseObj(user, 200, message, res);
  }
}

module.exports = new UserController();
