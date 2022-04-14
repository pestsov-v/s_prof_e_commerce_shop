const Manufacturer = require("./Manufacturer.model");
const BaseController = require("@base/base.controller");

class ManufacturerController {
  getManufacturers = BaseController.getAll(Manufacturer);
  getManufacturer = BaseController.getOne(Manufacturer);
  createManufacturer = BaseController.createOne(Manufacturer);
  updateManufacturer = BaseController.updateOne(Manufacturer);
  deleteManufacturer = BaseController.deleteOne(Manufacturer);
}

module.exports = new ManufacturerController();
