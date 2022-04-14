const express = require("express");
const TypeController = require("./type.controller");
const typePath = require("./type.router.path");
const typeRouter = express.Router();

typeRouter.get(typePath.types, TypeController.getTypes);
typeRouter.get(typePath.type, TypeController.getType);
typeRouter.post(typePath.types, TypeController.createType);
typeRouter.patch(typePath.type, TypeController.updateType);
typeRouter.delete(typePath.type, TypeController.deleteType);

module.exports = typeRouter;
