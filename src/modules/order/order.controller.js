const BaseController = require("../../core/base/base.controller");
const Order = require("./Order.model");
const OrderHelper = require("./order.helper");
const OrderService = require("./order.service");

class OrderController {
  getOrder = BaseController.getOne(Order);
  deleteOrder = BaseController.deleteOne(Order);

  async getOrders(req, res) {
    const orders = await OrderService.getOrder(req.user._id);
    const order = OrderHelper.getOrders(orders);

    OrderHelper.responseObject(order, 200, res);
  }

  async createOrder(req, res) {
    const user = await OrderService.getBasket(req.session.user._id);
    const products = OrderHelper.getProducts(user);
    const order = OrderService.newOrder(user, products);

    OrderHelper.sendOrder(order, req.user);
    OrderHelper.responseObject(order, 200, res);
  }
}

module.exports = new OrderController();
