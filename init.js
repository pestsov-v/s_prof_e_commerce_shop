const dotenv = require("dotenv");

const db = require("./src/db");
const app = require("./src/app");
dotenv.config();


const PORT = process.env.PORT || 4000;
const listenCb = () => console.log(`Сервер запущен на порту ${PORT}`);

app.listen(PORT, listenCb);