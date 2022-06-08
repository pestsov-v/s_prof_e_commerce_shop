const BaseController = require("../../../core/base/base.controller");
const Catalog = require("./Category.model");

class CategoryController extends BaseController {
  constructor() {
    super();
  }

  getCategories = super.getAll(Catalog);
  getCategory = super.getOne(Catalog);
  createCategory = super.createOne(Catalog);
  updateCategory = super.updateOne(Catalog);
  deleteCategory = super.deleteOne(Catalog);
}

module.exports = new CategoryController();
