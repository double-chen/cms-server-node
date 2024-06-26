const tagModel = require('../model/tagModel');

class TagController {
  async getTagList(ctx) {
    const result = await tagModel.getTagList(ctx);
    ctx.body = result;
  }

  async addTag(ctx) {
    const result = await tagModel.addTag(ctx);
    ctx.body = result;
  }

  async editTag(ctx) {
    const result = await tagModel.editTag(ctx);
    ctx.body = result;
  }

  async deleteTag(ctx) {
    const result = await tagModel.deleteTag(ctx);
    ctx.body = result;
  }
}

module.exports = new TagController();
