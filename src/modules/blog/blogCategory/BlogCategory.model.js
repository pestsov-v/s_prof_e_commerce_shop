const mongoose = require("mongoose");
const model = require("../../../core/enums/model.enum");

const blogCategorySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: model.article,
    },
  ],
});

const BlogCategory = mongoose.model(model.blogCategory, blogCategorySchema);
module.exports = BlogCategory;
