const express = require("express");
const CategoryController = require("./catalog.controller");
const categoryPath = require("./catalog.routes.path");
const categoryRouter = express.Router();

categoryRouter.get(categoryPath.categories, CategoryController.getCategories);
categoryRouter.get(categoryPath.category, CategoryController.getCategory);
categoryRouter.post(categoryPath.categories, CategoryController.createCategory);
categoryRouter.patch(categoryPath.category, CategoryController.updateCategory);
categoryRouter.delete(categoryPath.category, CategoryController.deleteCategory);

module.exports = categoryRouter;
