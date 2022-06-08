const BaseHelper = require("./base.helper");
const BaseError = require("./base.error");
const BaseService = require("./base.service");

const status = require("../status.enum");
const statusCode = require("../statusCode.enum");

class BaseController {
  getAll(Model) {
    return async (req, res) => {
      try {
        let filter = {};

        if (req.params.product) filter = { product: req.params.product };

        const features = new BaseHelper(Model.find(filter), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();

        const doc = await features.query;
        return BaseHelper.resultObj(statusCode.ok, status.success, doc, res);
      } catch (e) {
        console.log(e);
      }
    };
  }

  getOne(Model, popOptions) {
    return async (req, res, next) => {
      let query = await BaseService.getModel(Model, req.params.id);

      if (popOptions) query = query.populate(popOptions);
      const doc = await query;
      if (!doc) return next(BaseError.docNotFound());

      return BaseHelper.resultObj(statusCode.ok, status.success, doc, res);
    };
  }

  createOne(Model) {
    return async (req, res, next) => {
      const doc = await BaseService.createModel(Model, req.body);

      if (!doc) return next(BaseError.docNotFound());
      return BaseHelper.resultObj(statusCode.created, status.success, doc, res);
    };
  }

  updateOne(Model) {
    return async (req, res, next) => {
      const { id } = req.params;
      const { body } = req;
      const doс = await BaseService.updateModel(Model, id, body);
      if (!doс) return next(BaseError.docNotFound());

      return BaseHelper.resultObj(statusCode.ok, status.success, doс, res);
    };
  }

  deleteOne(Model) {
    return async (req, res, next) => {
      const doc = await BaseService.deleteModel(Model, req.params.id);
      if (!doc) return next(next(BaseError.docNotFound()));

      return BaseHelper.resultObj(statusCode.ok, status.success, doc, res);
    };
  }
}

module.exports = BaseController;
