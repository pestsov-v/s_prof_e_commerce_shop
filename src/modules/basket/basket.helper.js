exports.addToBasket = function (product, user) {
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
};
