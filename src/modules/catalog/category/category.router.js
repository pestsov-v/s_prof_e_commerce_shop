const express = require("express");
const CategoryController = require("./category.controller");
const categoryPath = require("./category.router.path");
const categoryRouter = express.Router();

categoryRouter.get(categoryPath.categories, CategoryController.getCategories);
categoryRouter.get(categoryPath.category, CategoryController.getCategory);
categoryRouter.post(categoryPath.categories, CategoryController.createCategory);
categoryRouter.patch(categoryPath.category, CategoryController.updateCategory);
categoryRouter.delete(categoryPath.category, CategoryController.deleteCategory);

module.exports = categoryRouter;
