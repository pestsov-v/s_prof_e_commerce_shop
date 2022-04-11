const CRUD = require("../../core/crud/crud.controller");
const { userNotFound } = require("./user.helper");
const { message } = require("./user.excection");
const User = require("./User.model");
const {
  deactivatedUserService,
  reactivatedUserService,
  responseObj,
} = require("./user.service");

exports.getUsers = CRUD.getAll(User);
exports.getUser = CRUD.getOne(User);
exports.updateUser = CRUD.updateOne(User);
exports.deleteUser = CRUD.deleteOne(User);

exports.deactivatedUser = async (req, res, next) => {
  const user = await deactivatedUserService(req.params.id);

  if (user === null) {
    return next(userNotFound());
  }

  return responseObj(user, 200, message.deactivated, res);
};

exports.reactivatedUser = async (req, res, next) => {
  const user = await reactivatedUserService(req.params.id);

  if (user === null) {
    return next(userNotFound());
  }

  return responseObj(user, 200, message.reactivated, res);
};
