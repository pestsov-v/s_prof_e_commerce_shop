const mongoose = require("mongoose");
const model = require("../../../core/enums/model.enum");

const categorySchema = new mongoose.Schema({
  name: String,
});

const Category = mongoose.model(model.category, categorySchema);
module.exports = Category;
