const ElectricalConnections = require("./electrical_connection.model");
const BaseController = require("@base/base.controller");

class ElectricalConnectionController {
  getElectricalConnections = BaseController.getAll(ElectricalConnections);
  getElectricalConnection = BaseController.getOne(ElectricalConnections);
  createElectricalConnection = BaseController.createOne(ElectricalConnections);
  updateElectricalConnection = BaseController.updateOne(ElectricalConnections);
  deleteElectricalConnection = BaseController.deleteOne(ElectricalConnections);
}

module.exports = new ElectricalConnectionController();
