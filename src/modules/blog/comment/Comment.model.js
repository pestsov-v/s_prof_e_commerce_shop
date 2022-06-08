const mongoose = require("mongoose");
const model = require("../../../core/model.enum");

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: model.article,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: model.user,
  },
});

const Comment = mongoose.model(model.comment, commentSchema);
module.exports = Comment;
