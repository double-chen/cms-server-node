const categoryModel = require('../model/categoryModel');
const {
  validateCreateCategory,
  validateUpdateCategory,
  validateIdCategory,
  validateIdsCategory,
} = require('../validators/categoryValidator');

class CategoryController {
  async getCategoryList(ctx) {
    const params = ctx.request.body;
    const result = await categoryModel.getCategoryList(params.parentId);
    ctx.body = result;
  }

  async getCategoryById(ctx) {
    const params = ctx.query;

    const { error } = validateIdCategory(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await categoryModel.getCategoryById(params.id);
    ctx.body = result;
  }

  async addCategory(ctx) {
    const params = ctx.request.body;

    const { error } = validateCreateCategory(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await categoryModel.addCategory(params);
    ctx.body = result;
  }

  async editCategory(ctx) {
    const params = ctx.request.body;

    const { error } = validateUpdateCategory(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }
    const result = await categoryModel.editCategory(params);
    ctx.body = result;
  }

  async deleteCategory(ctx) {
    const params = ctx.request.body;

    const { error } = validateIdsCategory(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }
    const result = await categoryModel.deleteCategory(params.ids);
    ctx.body = result;
  }
}

module.exports = new CategoryController();
