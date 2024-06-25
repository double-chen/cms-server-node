const config = require('../config');
const articleMock = require('../mock/articleMock');

async function getArticleList(ctx) {
  if (config.useMock) {
    return articleMock.getArticleList(ctx);
  }
}

async function addArticle(ctx) {
  if (config.useMock) {
    return articleMock.addArticle(ctx);
  }
}

async function editArticle(ctx) {
  if (config.useMock) {
    return articleMock.editArticle(ctx);
  }
}

async function deleteArticle(ctx) {
  if (config.useMock) {
    return articleMock.deleteArticle(ctx);
  }
}

module.exports = {
  getArticleList,
  addArticle,
  editArticle,
  deleteArticle,
};
