const express = require("express");

const dishwasherController = require("./dishwasher.controller");
const dishwasherPath = require("./dishwasher.routes.path");

const dishwasherRouter = express.Router();

dishwasherRouter.get(
  dishwasherPath.dishwashers,
  dishwasherController.getDishwashers
);
dishwasherRouter.get(
  dishwasherPath.dishwasher,
  dishwasherController.getDishwasher
);
dishwasherRouter.post(
  dishwasherPath.dishwashers,
  dishwasherController.createDishwasher
);
dishwasherRouter.patch(
  dishwasherPath.dishwasher,
  dishwasherController.updateDishwasher
);
dishwasherRouter.delete(
  dishwasherPath.dishwasher,
  dishwasherController.deleteDishwasher
);

module.exports = dishwasherRouter;
