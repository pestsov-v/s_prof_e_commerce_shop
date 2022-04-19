const express = require("express");
const BlogCategory = require("./BlogCategory.controller");
const blogCategoryPath = require("./blogCategory.router.path");
const blogCategoryRouter = express.Router();

blogCategoryRouter.get(
  blogCategoryPath.blogCategories,
  BlogCategory.getBlogCategories
);
blogCategoryRouter.get(
  blogCategoryPath.blogCategory,
  BlogCategory.getBlogCategory
);
blogCategoryRouter.post(
  blogCategoryPath.blogCategories,
  BlogCategory.createBlogCategory
);
blogCategoryRouter.patch(
  blogCategoryPath.blogCategory,
  BlogCategory.updateBlogCategory
);
blogCategoryRouter.delete(
  blogCategoryPath.blogCategory,
  BlogCategory.deleteBlogCategory
);

module.exports = blogCategoryRouter;
