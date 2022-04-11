const express = require("express");
const authController = require("./auth.controller");
const authPath = require("./auth.routes.path");
const authRouter = express.Router();

authRouter.post(authPath.signup, authController.signup);
authRouter.post(authPath.login, authController.login);

module.exports = authRouter;
