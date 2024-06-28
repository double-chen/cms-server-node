const tagMock = require('../mock/tagMock');
const config = require('../config');

async function getTagList(ctx) {
  if (config.useMock) {
    return tagMock.getTagList(ctx);
  }
}

async function getTagById(id) {
  if (config.useMock) {
    return tagMock.getTagById(id);
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

async function deleteTag(id) {
  if (config.useMock) {
    return tagMock.deleteTag(id);
  }
}

module.exports = {
  getTagList,
  addTag,
  editTag,
  deleteTag,
  getTagById,
};
