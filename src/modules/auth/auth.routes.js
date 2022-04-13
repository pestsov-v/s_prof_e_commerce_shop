const express = require("express");
const AuthController = require("./auth.controller");
const authPath = require("./auth.routes.path");
const AuthMiddleware = require("./auth.middleware");

const authRouter = express.Router();

authRouter.post(authPath.signup, AuthController.signup);
authRouter.post(authPath.login, AuthController.login);
authRouter.post(authPath.logout, AuthMiddleware.protect, AuthController.logout);

authRouter.post(authPath.password, AuthController.forgotPassword);
authRouter.patch(authPath.reset, AuthController.resetPassword);

module.exports = authRouter;
