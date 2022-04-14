const mongoose = require("mongoose");

const formShema = new mongoose.Schema({
  form: {
    type: String,
    required: true,
    unique: true,
  },
  products: {
    type: [String],
    default: null,
  },
});

const Form = mongoose.model("Form", formShema);
module.exports = Form;
