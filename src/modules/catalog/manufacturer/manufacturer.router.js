const express = require("express");
const ManufacturerController = require("./manufacturer.controller");
const manufacturerPath = require("./manufacturer.router.path");
const manufacturerRouter = express.Router();

manufacturerRouter.get(
  manufacturerPath.manufacturers,
  ManufacturerController.getManufacturers
);
manufacturerRouter.get(
  manufacturerPath.manufacturer,
  ManufacturerController.getManufacturer
);
manufacturerRouter.post(
  manufacturerPath.manufacturers,
  ManufacturerController.createManufacturer
);
manufacturerRouter.patch(
  manufacturerPath.manufacturer,
  ManufacturerController.updateManufacturer
);
manufacturerRouter.delete(
  manufacturerPath.manufacturer,
  ManufacturerController.deleteManufacturer
);

module.exports = manufacturerRouter;
