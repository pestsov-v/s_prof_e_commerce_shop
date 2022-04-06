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

exports.getOne = (Model) => async (req, res) => {
  const document = await Model.findById(req.params.id);
  res.json({
    status: "success",
    data: {
      data: document,
    },
  });
};

exports.createOne = (Model) => async (req, res) => {
  const document = await Model.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: document,
    },
  });
};

exports.updateOne = (Model) => async (req, res) => {
  const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      data: document,
    },
  });
};

exports.deleteOne = (Model) => async (req, res) => {
  const document = await Model.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Удаление прошло успешно",
    data: {
      data: null,
    },
  });
};
