const BaseController = require("../../../core/base/base.controller");
const Article = require("./Article.model");

class ArticleController {
  getArticles = BaseController.getAll(Article);
  getArticle = BaseController.getOne(Article);
  createArticle = BaseController.createOne(Article);
  updateArticle = BaseController.updateOne(Article);
  deleteArticle = BaseController.deleteOne(Article);
}

module.exports = new ArticleController();
