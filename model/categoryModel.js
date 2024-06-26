const categoryMock = require('../mock/categoryMock');

async function getCategoryList(ctx) {
  if (process.env.USE_MOCK) {
    return categoryMock.getCategoryList(ctx);
  }
}

async function addCategory(ctx) {
  if (process.env.USE_MOCK) {
    return categoryMock.addCategory(ctx);
  }
}

async function editCategory(ctx) {
  if (process.env.USE_MOCK) {
    return categoryMock.editCategory(ctx);
  }
}

async function deleteCategory(ctx) {
  if (process.env.USE_MOCK) {
    return categoryMock.deleteCategory(ctx);
  }
}

module.exports = {
  getCategoryList,
  addCategory,
  editCategory,
  deleteCategory,
};
