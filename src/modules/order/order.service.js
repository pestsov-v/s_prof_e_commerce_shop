const User = require("../user/User.model");
const Order = require("./Order.model");

class OrderService {
  async getOrder(id) {
    return await Order.find({ "user.userId": id }).populate("user.userId");
  }

  async getBasket(id) {
    return await User.findById(id).populate("basket.items.productId");
  }

  newOrder(user, products) {
    return new Order({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        userId: user,
      },
      products: products,
    });
  }
}

module.exports = new OrderService();
