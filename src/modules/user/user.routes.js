const express = require("express");
const AuthMiddleware = require("../auth/auth.middleware");
const { protect, restrictTo } = require("../auth/auth.middleware");

const userController = require("./user.controller");
const userPath = require("./user.routes.path");

const adminRules = AuthMiddleware.restrictTo("admin");

const userRouter = express.Router();

userRouter.get(userPath.users, AuthMiddleware.protect, userController.getUsers);
userRouter.get(userPath.user, AuthMiddleware.protect, userController.getUser);
userRouter.patch(
  userPath.user,
  AuthMiddleware.protect,
  userController.updateUser
);
userRouter.delete(
  userPath.user,
  AuthMiddleware.protect,
  userController.deleteUser
);

userRouter.patch(
  userPath.deactivated,
  AuthMiddleware.protect,
  adminRules,
  userController.deactivatedUser
);
userRouter.patch(
  userPath.reactivated,
  AuthMiddleware.protect,
  adminRules,
  userController.reactivatedUser
);

module.exports = userRouter;
