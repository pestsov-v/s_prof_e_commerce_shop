class BaseService {
  static async createModel(Model, body) {
    return await Model.create(body);
  }

  static async getModel(Model, id) {
    return Model.findById(id);
  }

  static async updateModel(Model, id, body) {
    return Model.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  }

  static async deleteModel(Model, id) {
    return Model.findByIdAndDelete(id);
  }
}

module.exports = BaseService;
