const tagModel = require('../model/tagModel');
const {
  validateCreateTag,
  validateUpdateTag,
  validateIdTag,
} = require('../validators/tagValidator');

class TagController {
  async getTagList(ctx) {
    const result = await tagModel.getTagList();
    ctx.body = result;
  }

  async getTagById(ctx) {
    const params = ctx.query;

    const { error } = validateIdTag(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }
    const result = await tagModel.getTagById(params.id);
    ctx.body = result;
  }

  async addTag(ctx) {
    const params = ctx.request.body;
    const { error } = validateCreateTag(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }
    const result = await tagModel.addTag(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '创建标签失败');
    }
  }

  async editTag(ctx) {
    const params = ctx.request.body;
    const { error } = validateUpdateTag(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }
    const result = await tagModel.editTag(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '编辑标签失败');
    }
  }

  async deleteTag(ctx) {
    const params = ctx.request.body;
    const { error } = validateIdTag(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }
    const result = await tagModel.deleteTag(params.id);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '创建标签失败');
    }
  }
}

module.exports = new TagController();
