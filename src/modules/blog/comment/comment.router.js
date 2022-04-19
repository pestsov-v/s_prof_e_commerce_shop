const express = require("express");
const CommentController = require("./comment.controller");
const CommentPath = require("./comment.router.path");
const commentRouter = express.Router();

commentRouter.get(CommentPath.comments, CommentController.getComments);
commentRouter.get(CommentPath.comment, CommentController.getComment);
commentRouter.post(CommentPath.comments, CommentController.createComment);
commentRouter.patch(CommentPath.comment, CommentController.updateComment);
commentRouter.delete(CommentPath.comment, CommentController.deleteComment);

module.exports = commentRouter;
