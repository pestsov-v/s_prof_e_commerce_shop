const BaseController = require("../../../core/base/base.controller");
const BlogCategory = require("./BlogCategory.model");

class BlogCategoryController extends BaseController {
  constructor() {
    super();
  }

  getBlogCategories = super.getAll(BlogCategory);
  getBlogCategory = super.getOne(BlogCategory);
  createBlogCategory = super.createOne(BlogCategory);
  updateBlogCategory = super.updateOne(BlogCategory);
  deleteBlogCategory = super.deleteOne(BlogCategory);
}

module.exports = new BlogCategoryController();
