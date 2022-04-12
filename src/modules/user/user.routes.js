const express = require("express");
const { protect, restrictTo } = require("../auth/auth.middleware");

const userController = require("./user.controller");
const userPath = require("./user.routes.path");

const adminRules = restrictTo("admin");

const userRouter = express.Router();

userRouter.get(userPath.users, protect, userController.getUsers);
userRouter.get(userPath.user, protect, userController.getUser);
userRouter.patch(userPath.user, protect, userController.updateUser);
userRouter.delete(userPath.user, protect, userController.deleteUser);

userRouter.patch(
  userPath.deactivated,
  protect,
  adminRules,
  userController.deactivatedUser
);
userRouter.patch(
  userPath.reactivated,
  protect,
  adminRules,
  userController.reactivatedUser
);

module.exports = userRouter;
