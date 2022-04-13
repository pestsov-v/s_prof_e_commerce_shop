const BaseHelper = require("./base.helpers");
const BaseError = require("./base.error");
const BaseService = require("./base.service");

class BaseController {
  static getAll(Model) {
    return async (req, res) => {
      try {
        let filter = {};

        if (req.params.product) filter = { product: req.params.product };

        const features = new BaseHelper(Model.find(filter), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();

        const documents = await features.query;

        res.status(200).json({
          status: "success",
          results: documents.length,
          data: {
            data: documents,
          },
        });
      } catch (e) {
        console.log(e);
      }
    };
  }

  static getOne(Model) {
    return async (req, res, next) => {
      const document = await BaseService.getModel(Model, req.params.id);

      if (!document) return next(BaseError.docNotFound());

      res.json({
        status: "success",
        data: {
          data: document,
        },
      });
    };
  }

  static createOne(Model) {
    return async (req, res, next) => {
      const document = await BaseService.createModel(Model, req.body);

      if (!document) return next(BaseError.docNotFound());

      res.status(201).json({
        status: "success",
        data: {
          data: document,
        },
      });
    };
  }

  static updateOne(Model) {
    return async (req, res, next) => {
      const { id } = req.params;
      const { body } = req;
      const document = await BaseService.updateModel(Model, id, body);

      if (!document) return next(BaseError.docNotFound());

      res.status(200).json({
        status: "success",
        data: {
          data: document,
        },
      });
    };
  }

  static deleteOne(Model) {
    return async (req, res, next) => {
      const document = await BaseService.deleteModel(Model, id);

      if (!document) return next(next(BaseError.docNotFound()));

      res.status(200).json({
        status: "success",
        message: "Удаление прошло успешно",
        data: {
          data: null,
        },
      });
    };
  }
}

module.exports = BaseController;
