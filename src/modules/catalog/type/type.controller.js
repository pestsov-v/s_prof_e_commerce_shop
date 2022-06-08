const BaseController = require("../../../core/base/base.controller");
const Type = require("./Type.model");

class TypeController extends BaseController {
  constructor() {
    super();
  }

  getTypes = super.getAll(Type);
  getType = super.getOne(Type);
  createType = super.createOne(Type);
  updateType = super.updateOne(Type);
  deleteType = super.deleteOne(Type);
}

module.exports = new TypeController();
