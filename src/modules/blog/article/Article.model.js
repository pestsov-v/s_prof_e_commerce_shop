const mongoose = require("mongoose");
const model = require("../../../core/model.enum");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  header: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: model.blogCategory,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: model.user,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Article = mongoose.model(model.article, articleSchema);
module.exports = Article;
