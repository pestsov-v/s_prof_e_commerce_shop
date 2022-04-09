const CRUD = require("../controllers/crud.controller");
const Category = require("../models/Category.model");

exports.getCategories = CRUD.getAll(Category);
exports.getCategory = CRUD.getOne(Category);
exports.createCategory = CRUD.createOne(Category);
exports.updateCategory = CRUD.updateOne(Category);
exports.deleteCategory = CRUD.deleteOne(Category);
