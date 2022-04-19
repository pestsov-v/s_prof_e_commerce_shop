const express = require("express");
const ArticleController = require("./article.controller");
const articlePath = require("./article.router.path");
const articleRouter = express.Router();

articleRouter.get(articlePath.articles, ArticleController.getArticles);
articleRouter.get(articlePath.article, ArticleController.getArticle);
articleRouter.post(articlePath.articles, ArticleController.createArticle);
articleRouter.patch(articlePath.article, ArticleController.updateArticle);
articleRouter.delete(articlePath.article, ArticleController.deleteArticle);

module.exports = articleRouter;
