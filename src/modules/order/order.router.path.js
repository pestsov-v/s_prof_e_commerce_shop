const ORDERS = "/order";
const ORDER = "/order/:id";
const USER_ORDERS = "/order/:id/user";

const orderPath = {
  orders: ORDERS,
  order: ORDER,
  userOrders: USER_ORDERS,
};

module.exports = orderPath;
