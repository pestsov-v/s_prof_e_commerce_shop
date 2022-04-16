const BaseController = require("../../../core/base/base.controller");
const Form = require("./Form.model");

class FormController {
  getForms = BaseController.getAll(Form);
  getForm = BaseController.getOne(Form);
  createForm = BaseController.createOne(Form);
  updateForm = BaseController.updateOne(Form);
  deleteForm = BaseController.deleteOne(Form);
}

module.exports = new FormController();
