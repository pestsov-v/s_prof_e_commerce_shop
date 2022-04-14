const express = require("express");
const ElectricalConnectionController = require("./electrical_connection.controller");
const electricalConnectionPath = require("./electrical_connection.router.path");
const electricalConnectionRouter = express.Router();

electricalConnectionRouter.get(
  electricalConnectionPath.electrical_connections,
  ElectricalConnectionController.getElectricalConnections
);
electricalConnectionRouter.get(
  electricalConnectionPath.electrical_connection,
  ElectricalConnectionController.getElectricalConnection
);
electricalConnectionRouter.post(
  electricalConnectionPath.electrical_connections,
  ElectricalConnectionController.createElectricalConnection
);
electricalConnectionRouter.patch(
  electricalConnectionPath.electrical_connection,
  ElectricalConnectionController.updateElectricalConnection
);
electricalConnectionRouter.delete(
  electricalConnectionPath.electrical_connection,
  ElectricalConnectionController.deleteElectricalConnection
);

module.exports = electricalConnectionRouter;
