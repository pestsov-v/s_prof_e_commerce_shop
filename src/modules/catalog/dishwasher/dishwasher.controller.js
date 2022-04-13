const BaseController = require("../../../core/base/base.controller");
const Dishwasher = require("./Dishwasher.model");

class DishwasherController {
  getDishwashers = BaseController.getAll(Dishwasher);
  getDishwasher = BaseController.getOne(Dishwasher);
  createDishwasher = BaseController.createOne(Dishwasher);
  updateDishwasher = BaseController.updateOne(Dishwasher);
  deleteDishwasher = BaseController.deleteOne(Dishwasher);
}

module.exports = new DishwasherController();
