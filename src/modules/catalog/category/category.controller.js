const BaseController = require("../../../core/base/base.controller");
const Catalog = require("./Category.model");

class CategoryController {
  getCategories = BaseController.getAll(Catalog);
  getCategory = BaseController.getOne(Catalog);
  createCategory = BaseController.createOne(Catalog);
  updateCategory = BaseController.updateOne(Catalog);
  deleteCategory = BaseController.deleteOne(Catalog);
}

module.exports = new CategoryController();
