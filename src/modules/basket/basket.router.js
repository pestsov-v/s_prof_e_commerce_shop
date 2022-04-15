const express = require("express");
const BasketError = require("./basket.error");
const Product = require("../catalog/product/Product.model");
const User = require("../user/User.model");
const basketRouter = express.Router();
const {
  addToBasket,
  removeFromBasket,
  mapCartItems,
  computePrice,
} = require("./basket.helper");

basketRouter.post("/basket/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!req.session.user) return next(BasketError.hasNotSession());
  const user = await User.findById(req.session.user._id);
  const basket = await addToBasket(product, user);
  res.status(200).json({ basket });
});

basketRouter.delete("/basket/:id", async (req, res) => {
  const user = await User.findById(req.session.user._id);
  await removeFromBasket(req.params.id, user);
  const execUser = await user.populate("basket.items.productId");
  const products = mapCartItems(execUser.basket);
  const basket = {
    products,
    price: computePrice(products),
  };
  res.status(200).json(basket);
});

module.exports = basketRouter;
