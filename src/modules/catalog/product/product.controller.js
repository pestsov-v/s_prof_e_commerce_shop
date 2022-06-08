const BaseController = require("../../../core/base/base.controller");
const Product = require("./Product.model");

class ProductController extends BaseController {
  constructor() {
    super();
  }

  getProducts = super.getAll(Product);
  getProduct = super.getOne(
    Product,
    "manufacturer form type electrical_connections"
  );
  createProduct = super.createOne(Product);
  updateProduct = super.updateOne(Product);
  deleteProduct = super.deleteOne(Product);
}

module.exports = new ProductController();
