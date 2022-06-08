const mongoose = require("mongoose");
const model = require("../../../core/enums/model.enum");
const phase = require("./enum/phase.enum");
const voltage = require("./enum/voltage.enum");

const electricalConnectionsShema = new mongoose.Schema({
  number_phases: {
    type: Number,
    enum: [phase.single, phase.three],
  },
  voltage: {
    type: Number,
    enum: [
      voltage.operatingSingleVoltage,
      voltage.openSingleVoltage,
      voltage.operatingThreeVoltage,
      voltage.openThreeVoltage,
    ],
  },
  power: {
    type: Number,
    required: true,
  },
});

const Electrical_connections = mongoose.model(
  model.electricalConnect,
  electricalConnectionsShema
);
module.exports = Electrical_connections;
