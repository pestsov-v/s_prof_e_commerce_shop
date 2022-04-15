const BasketError = require("./basket.error");
const BaskerHelper = require("./basket.helper");
const BasketService = require("./basket.service");

class BasketController {
  async addToBasket(req, res, next) {
    const product = await BasketService.findProduct(req.params.id);

    if (!req.session.user) return next(BasketError.hasNotSession());

    const user = await BasketService.findUser(req.session.user._id);
    const basket = await BasketService.addProduct(product, user);

    BaskerHelper.responseObject(basket, 200, res);
  }

  async removeFromBasket(req, res) {
    const { _id } = req.session.user;
    const { id } = req.params;

    const products = await BasketService.removeProduct(id, _id);
    const price = BaskerHelper.computePrice(products);
    const basket = { products, price };
    BaskerHelper.responseObject(basket, 200, res);
  }

  async getBasket(req, res) {
    const user = await BasketService.findUser(req.session.user._id);
    const userBasket = await user.populate("basket.items.productId");

    const basket = BaskerHelper.mapBasketItems(userBasket.basket);

    BaskerHelper.responseObjWithPrice(basket, 200, res);
  }
}

module.exports = new BasketController();
