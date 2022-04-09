const CRUD = require("../controllers/crud.controller");
const User = require("../models/User.model");

exports.getUsers = CRUD.getAll(User);
exports.getUser = CRUD.getOne(User);
exports.updateUser = CRUD.updateOne(User);
exports.deleteUser = CRUD.deleteOne(User);
