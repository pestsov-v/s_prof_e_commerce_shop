const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoty_name: String,
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
