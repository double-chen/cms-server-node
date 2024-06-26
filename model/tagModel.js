const tagMock = require('../mock/tagMock');

async function getTagList(ctx) {
  if (process.env.USE_MOCK) {
    return tagMock.getTagList(ctx);
  }
}

async function addTag(ctx) {
  if (process.env.USE_MOCK) {
    return tagMock.addTag(ctx);
  }
}

async function editTag(ctx) {
  if (process.env.USE_MOCK) {
    return tagMock.editTag(ctx);
  }
}

async function deleteTag(ctx) {
  if (process.env.USE_MOCK) {
    return tagMock.deleteTag(ctx);
  }
}

module.exports = {
  getTagList,
  addTag,
  editTag,
  deleteTag,
};
