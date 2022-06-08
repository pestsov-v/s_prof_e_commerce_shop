const BaseController = require("../../../core/base/base.controller");
const Article = require("./Article.model");

class ArticleController extends BaseController {
  constructor() {
    super();
  }

  getArticles = super.getAll(Article);
  getArticle = super.getOne(Article);
  createArticle = super.createOne(Article);
  updateArticle = super.updateOne(Article);
  deleteArticle = super.deleteOne(Article);
}

module.exports = new ArticleController();
