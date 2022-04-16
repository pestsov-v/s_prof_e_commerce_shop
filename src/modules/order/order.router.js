const express = require("express");
const OrderController = require("./order.controller");
const orderPath = require("./order.router.path");
const orderRouter = express.Router();

// add CRUD order

orderRouter.get(orderPath.orders, (req, res) => {});
orderRouter.post(orderPath.order, (req, res) => {});

module.exports = orderRouter;
