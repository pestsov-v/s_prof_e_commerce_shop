const express = require("express");
const authController = require("./auth.controller");
const authPath = require("./auth.routes.path");
const authRouter = express.Router();

authRouter.post(authPath.signup, authController.signup);

module.exports = authRouter;
