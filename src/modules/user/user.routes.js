const express = require("express");
const userController = require("./user.controller");
const userPath = require("./user.routes.path");
const userRouter = express.Router();

userRouter.get(userPath.users, userController.getUsers);
userRouter.get(userPath.user, userController.getUser);
userRouter.patch(userPath.user, userController.updateUser);
userRouter.delete(userPath.user, userController.deleteUser);
userRouter.patch(userPath.deactivated, userController.deactivatedUser);
userRouter.patch(userPath.reactivated, userController.reactivatedUser);

module.exports = userRouter;
