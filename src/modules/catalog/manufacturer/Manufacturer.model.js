const mongoose = require("mongoose");
const model = require("../../../core/enums/model.enum");

const manufacturerShema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Manufacturer = mongoose.model(model.manufacturer, manufacturerShema);
module.exports = Manufacturer;
