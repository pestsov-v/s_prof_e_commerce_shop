const BaseController = require("../../../core/base/base.controller");
const Manufacturer = require("./Manufacturer.model");

class ManufacturerController {
  getManufacturers = BaseController.getAll(Manufacturer);
  getManufacturer = BaseController.getOne(Manufacturer);
  createManufacturer = BaseController.createOne(Manufacturer);
  updateManufacturer = BaseController.updateOne(Manufacturer);
  deleteManufacturer = BaseController.deleteOne(Manufacturer);
}

module.exports = new ManufacturerController();
