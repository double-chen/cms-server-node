const tagModel = require('../model/tagModel');

class TagController {
  async getTagList(ctx) {
    const result = await tagModel.getTagList(ctx);
    ctx.body = result;
  }

  async getTagById(ctx) {
    const params = ctx.query;
    const result = await tagModel.getTagById(params.id);
    ctx.body = result;
  }

  async addTag(ctx) {
    const params = ctx.request.body;
    const result = await tagModel.addTag(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '创建标签失败');
    }
  }

  async editTag(ctx) {
    const params = ctx.request.body;
    const result = await tagModel.editTag(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '创建标签失败');
    }
  }

  async deleteTag(ctx) {
    const params = ctx.request.body;
    const result = await tagModel.deleteTag(params.id);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '创建标签失败');
    }
  }
}

module.exports = new TagController();
