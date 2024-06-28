const categoryModel = require('../model/categoryModel');

class CategoryController {
  async getCategoryList(ctx) {
    const result = await categoryModel.getCategoryList(ctx);
    ctx.body = result;
  }

  async getCategoryById(ctx) {
    const params = ctx.query;
    const result = await categoryModel.getCategoryById(params.id);
    ctx.body = result;
  }

  async addCategory(ctx) {
    const result = await categoryModel.addCategory(ctx);
    ctx.body = result;
  }

  async editCategory(ctx) {
    const result = await categoryModel.editCategory(ctx);
    ctx.body = result;
  }

  async deleteCategory(ctx) {
    const result = await categoryModel.deleteCategory(ctx);
    ctx.body = result;
  }
}

module.exports = new CategoryController();
