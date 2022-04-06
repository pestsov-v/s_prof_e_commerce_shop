const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());
const API_PATH = "/api/v1";

app.use(API_PATH, userRouter);

module.exports = app;
