const express = require("express");
const { computePrice } = require("../basket/basket.helper");
const User = require("../user/User.model");
const OrderController = require("./order.controller");
const Order = require("./Order.model");
const orderPath = require("./order.router.path");
const orderRouter = express.Router();

// add CRUD order

orderRouter.get(orderPath.orders, (req, res) => {});

orderRouter.post(orderPath.orders, async (req, res) => {
  const user = await User.findById(req.session.user._id).populate(
    "basket.items.productId"
  );

  const products = user.basket.items.map((i) => ({
    count: i.count,
    product: { ...i.productId._doc },
  }));

  const order = new Order({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      userId: req.user,
    },
    products: products,
  });

  await order.save();
  res.status(200).json({
    status: "success",
    data: {
      order: order,
    },
  });
});

module.exports = orderRouter;
