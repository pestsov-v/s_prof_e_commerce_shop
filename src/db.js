const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect("mongodb://localhost:27017/s-prof", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("База данных успешно запущена");
const handleError = (error) => console.log(`Ошибка соединения: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

module.exports = db;
