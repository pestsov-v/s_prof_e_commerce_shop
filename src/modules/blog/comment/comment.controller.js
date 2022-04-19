const BaseController = require("../../../core/base/base.controller");
const Comment = require("./Comment.model");

class CommentsController {
  getComments = BaseController.getAll(Comment);
  getComment = BaseController.getOne(Comment);
  createComment = BaseController.createOne(Comment);
  updateComment = BaseController.updateOne(Comment);
  deleteComment = BaseController.deleteOne(Comment);

  getCommentsByUser() {}

  getCommentsByArticle() {}
}

module.exports = new CommentsController();
