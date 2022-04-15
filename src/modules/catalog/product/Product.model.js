const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
  },
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
  },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  series: {
    type: String,
  },
  article: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  isDiscounted: {
    type: Boolean,
    required: true,
    default: false,
  },
  electrical_connections: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Electrical_connections",
  },
  width: {
    type: Number,
    required: true,
  },
  depth: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    rquired: true,
  },
});

productShema.pre(/^find/, function (next) {
  this.populate({
    path: "manufacturer form type electrical_connections",
  });

  next();
});

productShema.method("toClient", function () {
  const product = this.toObject();

  product.id = product._id;
  delete product._id;

  return product;
});

const Product = mongoose.model("Product", productShema);

module.exports = Product;
