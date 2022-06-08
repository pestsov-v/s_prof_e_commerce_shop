const status = require("../../core/enums/status.enum");

class OrderHelper {
  getProducts(user) {
    const products = user.basket.items.map((i) => ({
      count: i.count,
      product: { ...i.productId._doc },
    }));
    return products;
  }

  getOrders(orders) {
    const order = orders.map((o) => {
      return {
        ...o._doc,
        price: o.products.reduce((total, p) => {
          return (total += p.count * p.product.price);
        }, 0),
      };
    });

    return order;
  }

  async sendOrder(order, user) {
    await order.save();
    await user.clearBasket();
  }

  responseObject(order, statusCode, res) {
    return res.status(statusCode).json({
      status: status.success,
      data: {
        order: order,
      },
    });
  }
}

module.exports = new OrderHelper();
