const BaseController = require("../../../core/base/base.controller");
const Comment = require("./Comment.model");

class CommentsController extends BaseController {
  constructor() {
    super();
  }

  getComments = super.getAll(Comment);
  getComment = super.getOne(Comment);
  createComment = super.createOne(Comment);
  updateComment = super.updateOne(Comment);
  deleteComment = super.deleteOne(Comment);

  getCommentsByUser() {}

  getCommentsByArticle() {}
}

module.exports = new CommentsController();
