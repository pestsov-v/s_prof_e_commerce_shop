const BaseController = require("../../../core/base/base.controller");
const Product = require("./Product.model");

class ProductController {
  getProducts = BaseController.getAll(Product);
  getProduct = BaseController.getOne(
    Product,
    "manufacturer form type electrical_connections"
  );
  createProduct = BaseController.createOne(Product);
  updateProduct = BaseController.updateOne(Product);
  deleteProduct = BaseController.deleteOne(Product);
}

module.exports = new ProductController();
