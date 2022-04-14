const mongoose = require("mongoose");

const formShema = new mongoose.Schema({
  form: {
    type: String,
    required: true,
    unique: true,
  },
});

const Form = mongoose.model("Form", formShema);
module.exports = Form;
