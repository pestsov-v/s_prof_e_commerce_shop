const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);
module.exports = BlogCategory;
