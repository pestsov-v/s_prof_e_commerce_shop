const express = require("express");
const OrderController = require("./order.controller");
const orderPath = require("./order.router.path");
const orderRouter = express.Router();

orderRouter.get(orderPath.orders, OrderController.getOrders);
orderRouter.get(orderPath.order, OrderController.getOrder);
orderRouter.post(orderPath.orders, OrderController.createOrder);
orderRouter.post(orderPath.order, OrderController.deleteOrder);

module.exports = orderRouter;
