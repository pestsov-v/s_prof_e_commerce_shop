const { handleNotFound } = require("../../modules/error/error.helper");

exports.getAll = (Model) => async (req, res) => {
  const documents = await Model.find();

  res.status(200).json({
    status: "success",
    results: documents.length,
    data: {
      data: documents,
    },
  });
};

exports.getOne = (Model) => async (req, res, next) => {
  const document = await Model.findById(req.params.id);

  if (!document) {
    return next(handleNotFound());
  }

  res.json({
    status: "success",
    data: {
      data: document,
    },
  });
};

exports.createOne = (Model) => async (req, res, next) => {
  const document = await Model.create(req.body);

  if (!document) {
    return next(handleNotFound());
  }

  res.status(201).json({
    status: "success",
    data: {
      data: document,
    },
  });
};

exports.updateOne = (Model) => async (req, res, next) => {
  const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!document) {
    return next(handleNotFound());
  }

  res.status(200).json({
    status: "success",
    data: {
      data: document,
    },
  });
};

exports.deleteOne = (Model) => async (req, res, next) => {
  const document = await Model.findByIdAndDelete(req.params.id);

  if (!document) {
    return next(handleNotFound());
  }

  res.status(200).json({
    status: "success",
    message: "Удаление прошло успешно",
    data: {
      data: null,
    },
  });
};
