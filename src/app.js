const express = require("express");
const path = require("path");

const errorMiddleware = require("./core/error/error.middleware");
const userRouter = require("./modules/user/user.routes");
const categoryRouter = require("./modules/category/category.routes");
const authRouter = require("./modules/auth/auth.routes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
const API_PATH = "/api/v1";

app.use(API_PATH, authRouter);
app.use(API_PATH, userRouter);
app.use(API_PATH, categoryRouter);

app.use(errorMiddleware);

module.exports = app;
