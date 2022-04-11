const CRUD = require("../../core/crud/crud.controller");
const User = require("./User.model");

exports.getUsers = CRUD.getAll(User);
exports.getUser = CRUD.getOne(User);
exports.updateUser = CRUD.updateOne(User);
exports.deleteUser = CRUD.deleteOne(User);


