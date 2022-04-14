const express = require("express");
const FormController = require("./form.controller");
const formPath = require("./form.router.path");
const formRouter = express.Router();

formRouter.get(formPath.forms, FormController.getForms);
formRouter.get(formPath.form, FormController.getForm);
formRouter.post(formPath.forms, FormController.createForm);
formRouter.patch(formPath.form, FormController.updateForm);
formRouter.delete(formPath.form, FormController.deleteForm);

module.exports = formRouter;
