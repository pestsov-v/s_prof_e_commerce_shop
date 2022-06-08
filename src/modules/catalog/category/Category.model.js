const mongoose = require("mongoose");
const model = require("../../../core/model.enum");

const categorySchema = new mongoose.Schema({
  name: String,
});

const Category = mongoose.model(model.category, categorySchema);
module.exports = Category;
