const tagModel = require('../model/tagModel');

class TagController {
  async getTagList(ctx) {
    return tagModel.getTagList(ctx);
  }

  async addTag(ctx) {
    return tagModel.addTag(ctx);
  }

  async editTag(ctx) {
    return tagModel.editTag(ctx);
  }

  async deleteTag(ctx) {
    return tagModel.deleteTag(ctx);
  }
}

module.exports = new TagController();
