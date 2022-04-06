const CRUD = require("../controllers/crud.controller");
const User = require("../models/User.model");

exports.getUsersAll = CRUD.getAll(User);
exports.getUserOne = CRUD.getOne(User);
exports.createUserOne = CRUD.createOne(User);
exports.updateUserOne = CRUD.updateOne(User);
exports.deleteUserOne = CRUD.deleteOne(User);
