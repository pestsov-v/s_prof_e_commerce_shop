const BaseController = require("../../../core/base/base.controller");
const Manufacturer = require("./Manufacturer.model");

class ManufacturerController extends BaseController {
  constructor() {
    super();
  }

  getManufacturers = super.getAll(Manufacturer);
  getManufacturer = super.getOne(Manufacturer);
  createManufacturer = super.createOne(Manufacturer);
  updateManufacturer = super.updateOne(Manufacturer);
  deleteManufacturer = super.deleteOne(Manufacturer);
}

module.exports = new ManufacturerController();
