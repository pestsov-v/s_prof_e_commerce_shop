const mongoose = require("mongoose");

const electricalConnectionsShema = new mongoose.Schema({
  number_phases: {
    type: Number,
    enum: [1, 3],
  },
  voltage: {
    type: Number,
    enum: [220, 230, 380, 400],
  },
  power: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Electrical_connections = mongoose.model(
  "Electrical_connections",
  electricalConnectionsShema
);
module.exports = Electrical_connections;
