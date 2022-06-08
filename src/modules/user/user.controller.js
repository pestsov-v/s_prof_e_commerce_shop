const UserHelper = require("./user.helper");
const UserError = require("./user.error");
const UserService = require("./user.service");
const User = require("./User.model");
const BaseController = require("../../core/base/base.controller");

const {
  deactivatedMessage,
  reactivatedMessage,
  changeRoleMessage,
} = require("./user.constants");
const statusCode = require("../../core/statusCode.enum");

class UserController extends BaseController {
  constructor() {
    super();
  }

  getUsers = super.getAll(User);
  getUser = super.getOne(User);
  updateUser = super.updateOne(User);
  deleteUser = super.deleteOne(User);

  async deactivatedUser(req, res, next) {
    const user = await UserService.deactivatedUser(req.params.id);
    if (user === null) return next(UserError.notFoundUser());
    return UserHelper.responseObj(user, statusCode.ok, deactivatedMessage, res);
  }

  async reactivatedUser(req, res, next) {
    const user = await UserService.reactivatedUser(req.params.id);
    if (user === null) return next(UserError.notFoundUser());
    return UserHelper.responseObj(user, statusCode.ok, reactivatedMessage, res);
  }

  async changeRoleToManager(req, res, next) {
    const user = await UserService.changedUserToManager(req.params.id);
    if (user === null) return UserError.notFoundUser();

    return UserHelper.responseObj(
      user,
      statusCode.ok,
      changeRoleMessage(user.role),
      res
    );
  }
}

module.exports = new UserController();
