const BaseController = require("../../../core/base/base.controller");
const Form = require("./Form.model");

class FormController extends BaseController {
  constructor() {
    super();
  }

  getForms = super.getAll(Form);
  getForm = super.getOne(Form);
  createForm = super.createOne(Form);
  updateForm = super.updateOne(Form);
  deleteForm = super.deleteOne(Form);
}

module.exports = new FormController();
