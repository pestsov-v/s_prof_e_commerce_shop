const express = require("express");

const authController = require("./auth.controller");
const { protect } = require("./auth.middleware");
const authPath = require("./auth.routes.path");

const authRouter = express.Router();

authRouter.post(authPath.signup, authController.signup);
authRouter.post(authPath.login, authController.login);
authRouter.post(authPath.logout, protect, authController.logout);

authRouter.post(authPath.password, authController.forgotPassword);
authRouter.patch(authPath.reset, authController.resetPassword);

module.exports = authRouter;
