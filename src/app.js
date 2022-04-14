require("module-alias/register");
const express = require("express");
const path = require("path");

const errorMiddleware = require("./core/error/error.middleware");
const userRouter = require("@modules/user/user.router");
const authRouter = require("@modules/auth/auth.router");

const categoryRouter = require("@catalog/category/category.router");
const productRouter = require("@catalog/product/product.router");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
const API_PATH = "/api/v1";

app.use(API_PATH, authRouter);
app.use(API_PATH, userRouter);
app.use(API_PATH, categoryRouter);
app.use(API_PATH, productRouter);

app.use(errorMiddleware);

module.exports = app;
