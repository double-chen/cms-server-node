const tagMock = require('../mock/tagMock');
const config = require('../config');

async function getTagList(ctx) {
  if (config.useMock) {
    return tagMock.getTagList(ctx);
  }
}

async function addTag(ctx) {
  if (config.useMock) {
    return tagMock.addTag(ctx);
  }
}

async function editTag(ctx) {
  if (config.useMock) {
    return tagMock.editTag(ctx);
  }
}

async function deleteTag(ctx) {
  if (config.useMock) {
    return tagMock.deleteTag(ctx);
  }
}

module.exports = {
  getTagList,
  addTag,
  editTag,
  deleteTag,
};
