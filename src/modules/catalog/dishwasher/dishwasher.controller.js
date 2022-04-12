const CRUD = require("../../../core/crud/crud.controller");
const Dishwasher = require("./Dishwasher.model");

exports.getDishwashers = CRUD.getAll(Dishwasher);
exports.getDishwasher = CRUD.getOne(Dishwasher);
exports.createDishwasher = CRUD.createOne(Dishwasher);
exports.updateDishwasher = CRUD.updateOne(Dishwasher);
exports.deleteDishwasher = CRUD.deleteOne(Dishwasher);
