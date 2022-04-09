const express = require("express");
const errorMiddleware = require("./middleware/error.middleware");
const userRouter = require("./routes/user.routes");
const categoryRouter = require("./routes/category.routes");
const authRouter = require("./routes/auth.routes");

const app = express();
app.use(express.json());
const API_PATH = "/api/v1";

app.use(API_PATH, userRouter);
app.use(API_PATH, categoryRouter);
app.use(API_PATH, authRouter);

app.use(errorMiddleware);

module.exports = app;
