const BaseController = require("../../../core/base/base.controller");
const ElectricalConnections = require("./electrical_connection.model");

class ElectricalConnectionController extends BaseController {
  constructor() {
    super();
  }

  getElectricalConnections = super.getAll(ElectricalConnections);
  getElectricalConnection = super.getOne(ElectricalConnections);
  createElectricalConnection = super.createOne(ElectricalConnections);
  updateElectricalConnection = super.updateOne(ElectricalConnections);
  deleteElectricalConnection = super.deleteOne(ElectricalConnections);
}

module.exports = new ElectricalConnectionController();
