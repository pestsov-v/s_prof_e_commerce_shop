const Product = require("../catalog/product/Product.model");
const User = require("../user/User.model");
const BasketHelper = require("./basket.helper");

class BasketService {
  async findProduct(id) {
    return await Product.findById(id);
  }

  async findUser(id) {
    return await User.findById(id);
  }

  async addProduct(product, id) {
    const user = await this.findUser(id);
    return await BasketHelper.addToBasket(product, user);
  }

  async removeProduct(product, id) {
    const user = await this.findUser(id);
    await BasketHelper.removeFromBasket(product, user);
    const userBasket = await user.populate("basket.items.productId");
    return BasketHelper.mapBasketItems(userBasket.basket);
  }

  async getBasket(id) {
    const user = await this.findUser(id);
    const userBasket = await user.populate("basket.items.productId");
    return BasketHelper.mapBasketItems(userBasket.basket);
  }
}

module.exports = new BasketService();
