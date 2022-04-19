const BaseController = require("../../../core/base/base.controller");
const BlogCategory = require("./BlogCategory.model");

class BlogCategoryController {
  getBlogCategories = BaseController.getAll(BlogCategory);
  getBlogCategory = BaseController.getOne(BlogCategory);
  createBlogCategory = BaseController.createOne(BlogCategory);
  updateBlogCategory = BaseController.updateOne(BlogCategory);
  deleteBlogCategory = BaseController.deleteOne(BlogCategory);
}

module.exports = new BlogCategoryController();
