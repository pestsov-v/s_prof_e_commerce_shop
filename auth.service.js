const ExceptionFilter = require("./exception/ExceptionFilter");
const { correctPassword } = require("./helpers/auth.helper");
const User = require("./models/User.model");

exports.loginService = async (email, password) => {
  console.log(email, password);
  if (!email || !password) {
    return new ExceptionFilter("Пожалуйста заполните все поля", 400);
  }

  const user = await User.findOne({ email }).select("+password");
  const correct = await correctPassword(password, user.password);

  if (!user || !correct) {
    return new ExceptionFilter("Неверный email или пароль", 401);
  }
};
