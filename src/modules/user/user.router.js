const express = require("express");
const AuthMiddleware = require("../auth/auth.middleware");

const UserController = require("./user.controller");
const userPath = require("./user.router.path");

const adminRules = AuthMiddleware.restrictTo("admin");

const userRouter = express.Router();

userRouter.get(userPath.users, AuthMiddleware.protect, UserController.getUsers);
userRouter.get(userPath.user, AuthMiddleware.protect, UserController.getUser);
userRouter.patch(
  userPath.user,
  AuthMiddleware.protect,
  UserController.updateUser
);
userRouter.delete(
  userPath.user,
  AuthMiddleware.protect,
  UserController.deleteUser
);

userRouter.patch(
  userPath.deactivated,
  AuthMiddleware.protect,
  adminRules,
  UserController.deactivatedUser
);
userRouter.patch(
  userPath.reactivated,
  AuthMiddleware.protect,
  adminRules,
  UserController.reactivatedUser
);

module.exports = userRouter;
