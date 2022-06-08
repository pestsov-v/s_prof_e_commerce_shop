const success = require("../../core/status.enum");

class BasketHelper {
  addToBasket(product, user) {
    const items = [...user.basket.items];
    const idx = items.findIndex((p) => {
      return p.productId.toString() === product._id.toString();
    });

    if (idx >= 0) {
      items[idx].count = items[idx].count + 1;
    } else {
      items.push({
        productId: product._id,
        count: 1,
      });
    }

    user.basket = { items };
    return user.save();
  }

  removeFromBasket = function (id, user) {
    let items = [...user.basket.items];
    const idx = items.findIndex(
      (p) => p.productId.toString() === id.toString()
    );

    if (items[idx].count === 1) {
      items = items.filter((p) => p.productId.toString() !== id.toString());
    } else {
      items[idx].count--;
    }

    user.basket = { items };
    return user.save();
  };

  mapBasketItems(basket) {
    return basket.items.map((p) => ({
      ...p.productId._doc,
      id: p.productId.id,
      count: p.count,
    }));
  }

  computePrice = function (products) {
    return products.reduce((total, product) => {
      return (total += product.price * product.count);
    }, 0);
  };

  responseObjWithPrice(basket, statusCode, res) {
    return res.status(statusCode).json({
      status: success.success,
      basket,
      price: this.computePrice(basket),
    });
  }

  responseObject(basket, statusCode, res) {
    return res.status(statusCode).json({
      status: success.success,
      basket,
    });
  }
}

module.exports = new BasketHelper();
