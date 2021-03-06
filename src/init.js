const dotenv = require("dotenv");

require("./db");
const app = require("./app");
dotenv.config();

const PORT = process.env.PORT || 4000;
const listenCb = () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`);

app.listen(PORT, listenCb);
