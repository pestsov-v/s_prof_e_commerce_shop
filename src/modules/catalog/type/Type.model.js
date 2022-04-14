const mongoose = require("mongoose");

const typeShema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  products: {
    type: [String],
    default: null,
  },
});

const Type = mongoose.model("Type", typeShema);
module.exports = Type;
