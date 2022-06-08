const mongoose = require("mongoose");
const model = require("../../core/enums/model.enum");

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: Object,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
  ],
  user: {
    name: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: model.user,
      required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model(model.order, orderSchema);
module.exports = Order;
