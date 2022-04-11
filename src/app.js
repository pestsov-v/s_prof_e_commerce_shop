const express = require("express");
const errorMiddleware = require("./modules/error/error.middleware");
const userRouter = require("./modules/user/user.routes");
const categoryRouter = require("./modules/category/category.routes");
const authRouter = require("./modules/auth/auth.routes");

const app = express();
app.use(express.json());
const API_PATH = "/api/v1";

app.use(API_PATH, userRouter);
app.use(API_PATH, categoryRouter);
app.use(API_PATH, authRouter);

app.use(errorMiddleware);

module.exports = app;
