const express = require("express");
const BasketError = require("./basket.error");
const Product = require("../catalog/product/Product.model");
const User = require("../user/User.model");
const basketRouter = express.Router();
const { addToBasket } = require("./basket.helper");

basketRouter.get("/basket/add/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!req.session.user) return next(BasketError.hasNotSession());
  const user = await User.findById(req.session.user._id);
  const basket = await addToBasket(product, user);
  res.status(200).json({ basket });
});

module.exports = basketRouter;
