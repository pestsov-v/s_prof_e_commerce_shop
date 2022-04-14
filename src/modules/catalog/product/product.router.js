const express = require("express");
const ProductController = require("./product.controller");
const productPath = require("./product.router.path");
const productRouter = express.Router();

productRouter.get(productPath.products, ProductController.getProducts);
productRouter.get(productPath.product, ProductController.getProduct);
productRouter.post(productPath.products, ProductController.createProduct);
productRouter.patch(productPath.product, ProductController.updateProduct);
productRouter.delete(productPath.product, ProductController.deleteProduct);

module.exports = productRouter;
