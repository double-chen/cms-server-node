const categoryModel = require('../model/categoryModel');

class CategoryController {
  async getCategoryList(ctx) {
    return categoryModel.getCategoryList(ctx);
  }

  async addCategory(ctx) {
    return categoryModel.addCategory(ctx);
  }

  async editCategory(ctx) {
    return categoryModel.editCategory(ctx);
  }

  async deleteCategory(ctx) {
    return categoryModel.deleteCategory(ctx);
  }
}

module.exports = new CategoryController();
