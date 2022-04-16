const BaseController = require("../../core/base/base.controller");
const Order = require("./Order.model");

class OrderController {
  getOrder = BaseController.getOne(Order);
  deleteOrder = BaseController.deleteOne(Order);
}

module.exports = new OrderController();
