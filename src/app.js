require("module-alias/register");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const swagger = require("swagger-ui-express");
const MongoStore = require("connect-mongo")(session);

const documentation = require("./documentation/index");
const sessionVariables = require("./core/session/session.variables");
const sessionUser = require("./core/session/session.user");

const errorMiddleware = require("./core/error/error.middleware");
const userRouter = require("@modules/user/user.router");
const authRouter = require("@modules/auth/auth.router");
const basketRouter = require("./modules/basket/basket.router");

const categoryRouter = require("@catalog/category/category.router");
const productRouter = require("@catalog/product/product.router");
const typeRouter = require("@catalog/type/type.router");
const manufacturerRouter = require("@catalog/manufacturer/manufacturer.router");
const formRouter = require("@catalog/form/form.router");
const electricalConnectionRouter = require("@catalog/electrical_connection/electrical_connection.router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 100 * 60 * 1000 },
  })
);

app.use(sessionVariables);
app.use(sessionUser);

const API_PATH = "/api/v1";
const API_DOC_PATH = "/api/v1/documentation";

app.use(API_DOC_PATH, swagger.serve, swagger.setup(documentation));

app.use(API_PATH, authRouter);
app.use(API_PATH, userRouter);
app.use(API_PATH, basketRouter);

app.use(API_PATH, categoryRouter);
app.use(API_PATH, productRouter);
app.use(API_PATH, typeRouter);
app.use(API_PATH, manufacturerRouter);
app.use(API_PATH, formRouter);
app.use(API_PATH, electricalConnectionRouter);

app.use(errorMiddleware);

module.exports = app;
