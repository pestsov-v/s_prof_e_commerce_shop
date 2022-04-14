const Type = require("./Type.model");
const BaseController = require("@base/base.controller");

class TypeController {
  getTypes = BaseController.getAll(Type);
  getType = BaseController.getOne(Type);
  createType = BaseController.createOne(Type);
  updateType = BaseController.updateOne(Type);
  deleteType = BaseController.deleteOne(Type);
}

module.exports = new TypeController();
