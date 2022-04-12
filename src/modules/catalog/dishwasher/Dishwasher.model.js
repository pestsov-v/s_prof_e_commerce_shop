const mongoose = require("mongoose");

const dishwasherSchema = new mongoose.Schema({
  dishwasher_name: String,
  brand_name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  typeOfPhase: {
    type: String,
    enum: ["230", "380", "400", "230/380", "230/400"],
  },
  downloadType: {
    type: String,
    enum: ["Фронтальная", "Купольная", "Конвеерная", "Котломойная"],
  },
  price: {
    type: Number,
    required: true,
  },
});

const Dishwasher = mongoose.model("Dishwasher", dishwasherSchema);
module.exports = Dishwasher;
