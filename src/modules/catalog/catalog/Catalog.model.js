const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
  categoty_name: String,
});

const Catalog = mongoose.model("Catalog", catalogSchema);
module.exports = Catalog;
