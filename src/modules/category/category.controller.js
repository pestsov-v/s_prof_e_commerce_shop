const CRUD = require("../../core/crud/crud.controller.js");
const Category = require("./Category.model");

exports.getCategories = CRUD.getAll(Category);
exports.getCategory = CRUD.getOne(Category);
exports.createCategory = CRUD.createOne(Category);
exports.updateCategory = CRUD.updateOne(Category);
exports.deleteCategory = CRUD.deleteOne(Category);
