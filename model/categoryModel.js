const config = require('../config');
const categoryMock = require('../mock/categoryMock');

async function getCategoryList(ctx) {
  if (config.useMock) {
    return categoryMock.getCategoryList(ctx);
  }
}

async function addCategory(ctx) {
  if (config.useMock) {
    return categoryMock.addCategory(ctx);
  }
}

async function editCategory(ctx) {
  if (config.useMock) {
    return categoryMock.editCategory(ctx);
  }
}

async function deleteCategory(ctx) {
  if (config.useMock) {
    return categoryMock.deleteCategory(ctx);
  }
}

module.exports = {
  getCategoryList,
  addCategory,
  editCategory,
  deleteCategory,
};
