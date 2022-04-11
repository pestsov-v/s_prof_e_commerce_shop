const express = require("express");
const categoryController = require("./category.controller");
const categoryPath = require("./category.routes.path");
const categoryRouter = express.Router();

categoryRouter.get(categoryPath.categories, categoryController.getCategories);
categoryRouter.get(categoryPath.category, categoryController.getCategory);
categoryRouter.post(categoryPath.categories, categoryController.createCategory);
categoryRouter.patch(categoryPath.category, categoryController.updateCategory);
categoryRouter.delete(categoryPath.category, categoryController.deleteCategory);

module.exports = categoryRouter;
