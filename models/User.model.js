const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  surname_name: {
    type: String,
  },
  last_name: {
    type: String,
    required: [true, "Пожалуйста введите Вашу фамилию"],
  },
  email: {
    type: String,
    required: [true, "Пожалуйста введите Ваш email"],
    unique: true,
    lowercase: true,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
