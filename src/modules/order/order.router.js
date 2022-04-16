const express = require("express");
const User = require("../user/User.model");
const OrderController = require("./order.controller");
const OrderHelper = require("./order.helper");
const Order = require("./Order.model");
const orderPath = require("./order.router.path");
const orderRouter = express.Router();

// add CRUD order

orderRouter.get(orderPath.order, OrderController.getOrder);
orderRouter.post(orderPath.order, OrderController.deleteOrder);

orderRouter.get(orderPath.orders, async (req, res) => {
  const orders = await Order.find({ "user.userId": req.user._id }).populate(
    "user.userId"
  );

  const order = orders.map((o) => {
    return {
      ...o._doc,
      price: o.products.reduce((total, p) => {
        return (total += p.count * p.product.price);
      }, 0),
    };
  });

  res.status(200).json({
    status: "message",
    data: {
      order: order,
    },
  });
});

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
  await req.user.clearBasket();
  res.status(200).json({
    status: "success",
    data: {
      order: order,
    },
  });
});

module.exports = orderRouter;
