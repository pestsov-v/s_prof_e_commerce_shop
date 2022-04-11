const express = require("express");
const { protect, restrictTo } = require("../auth/auth.middleware");

const userController = require("./user.controller");
const userPath = require("./user.routes.path");

const userRouter = express.Router();

userRouter.get(userPath.users, protect, userController.getUsers);
userRouter.get(userPath.user, protect, userController.getUser);
userRouter.patch(userPath.user, protect, userController.updateUser);
userRouter.delete(userPath.user, protect, userController.deleteUser);

userRouter.use(restrictTo("admin"));
userRouter.patch(userPath.deactivated, protect, userController.deactivatedUser);
userRouter.patch(userPath.reactivated, protect, userController.reactivatedUser);

module.exports = userRouter;
