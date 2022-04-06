const express = require("express");
const userController = require("../controllers/user.controller");
const userPath = require("./user.routes.path");
const userRouter = express.Router();

userRouter.get(userPath.users, userController.getUsersAll);
userRouter.get(userPath.user, userController.getUserOne);
userRouter.post(userPath.users, userController.createUserOne);
userRouter.patch(userPath.user, userController.updateUserOne);
userRouter.delete(userPath.user, userController.deleteUserOne);

module.exports = userRouter;
