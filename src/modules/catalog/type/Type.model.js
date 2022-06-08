const mongoose = require("mongoose");
const model = require("../../../core/enums/model.enum");

const typeShema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
});

const Type = mongoose.model(model.type, typeShema);
module.exports = Type;
