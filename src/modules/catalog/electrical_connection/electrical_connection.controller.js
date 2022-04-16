const BaseController = require("../../../core/base/base.controller");
const ElectricalConnections = require("./electrical_connection.model");

class ElectricalConnectionController {
  getElectricalConnections = BaseController.getAll(ElectricalConnections);
  getElectricalConnection = BaseController.getOne(ElectricalConnections);
  createElectricalConnection = BaseController.createOne(ElectricalConnections);
  updateElectricalConnection = BaseController.updateOne(ElectricalConnections);
  deleteElectricalConnection = BaseController.deleteOne(ElectricalConnections);
}

module.exports = new ElectricalConnectionController();
