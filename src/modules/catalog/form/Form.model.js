const mongoose = require("mongoose");
const model = require("../../../core/enums/model.enum");

const formShema = new mongoose.Schema({
  form: {
    type: String,
    required: true,
    unique: true,
  },
});

const Form = mongoose.model(model.form, formShema);
module.exports = Form;
