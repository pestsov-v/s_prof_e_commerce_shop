const mongoose = require("mongoose");

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
  products: {
    type: [String],
    default: null,
  },
});

const Manufacturer = mongoose.model("Manufacturer", manufacturerShema);
module.exports = Manufacturer;
