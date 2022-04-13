const express = require("express");

const DishwasherController = require("./dishwasher.controller");
const dishwasherPath = require("./dishwasher.routes.path");

const dishwasherRouter = express.Router();

dishwasherRouter.get(
  dishwasherPath.dishwashers,
  DishwasherController.getDishwashers
);
dishwasherRouter.get(
  dishwasherPath.dishwasher,
  DishwasherController.getDishwasher
);
dishwasherRouter.post(
  dishwasherPath.dishwashers,
  DishwasherController.createDishwasher
);
dishwasherRouter.patch(
  dishwasherPath.dishwasher,
  DishwasherController.updateDishwasher
);
dishwasherRouter.delete(
  dishwasherPath.dishwasher,
  DishwasherController.deleteDishwasher
);

module.exports = dishwasherRouter;
