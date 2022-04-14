require("module-alias/register");
const express = require("express");
const path = require("path");

const errorMiddleware = require("./core/error/error.middleware");
const userRouter = require("@modules/user/user.router");
const authRouter = require("@modules/auth/auth.router");

const categoryRouter = require("@catalog/category/category.router");
const productRouter = require("@catalog/product/product.router");
const typeRouter = require("@catalog/type/type.router");
const manufacturerRouter = require("@catalog/manufacturer/manufacturer.router");
const formRouter = require("@catalog/form/form.router");
const electricalConnectionRouter = require("@catalog/electrical_connection/electrical_connection.router");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
const API_PATH = "/api/v1";

app.use(API_PATH, authRouter);
app.use(API_PATH, userRouter);

app.use(API_PATH, categoryRouter);
app.use(API_PATH, productRouter);
app.use(API_PATH, typeRouter);
app.use(API_PATH, manufacturerRouter);
app.use(API_PATH, formRouter);
app.use(API_PATH, electricalConnectionRouter);

app.use(errorMiddleware);

module.exports = app;
