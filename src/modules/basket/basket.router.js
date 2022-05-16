const express = require("express");
const basketPath = require("./basket.routes.path");
const BasketController = require("./basket.controller");
const basketRouter = express.Router();

basketRouter.get(basketPath.baskets, BasketController.getBasket);
basketRouter.get(basketPath.baskets, BasketController.getBasket);
basketRouter.post(basketPath.basket, BasketController.addToBasket);
basketRouter.delete(basketPath.basket, BasketController.removeFromBasket);

module.exports = basketRouter;
