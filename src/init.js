const dotenv = require("dotenv");

const db = require("./db");
const app = require("./app");
dotenv.config();


const PORT = process.env.PORT || 4000;
const listenCb = () => console.log(`Сервер запущен на порту ${PORT}`);

app.listen(PORT, listenCb);