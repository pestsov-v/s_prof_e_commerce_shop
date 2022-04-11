const express = require("express");

const authController = require("./auth.controller");
const { protect } = require("./auth.middleware");
const authPath = require("./auth.routes.path");

const authRouter = express.Router();

authRouter.post(authPath.signup, authController.signup);
authRouter.post(authPath.login, authController.login);

authRouter.use(protect);
authRouter.post(authPath.logout, authController.logout);

module.exports = authRouter;
