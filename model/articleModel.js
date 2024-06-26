const articleMock = require('../mock/articleMock');

async function getArticleList(ctx) {
  if (process.env.USE_MOCK) {
    return articleMock.getArticleList(ctx);
  }
}

async function addArticle(ctx) {
  if (process.env.USE_MOCK) {
    return articleMock.addArticle(ctx);
  }
}

async function editArticle(ctx) {
  if (process.env.USE_MOCK) {
    return articleMock.editArticle(ctx);
  }
}

async function deleteArticle(ctx) {
  if (process.env.USE_MOCK) {
    return articleMock.deleteArticle(ctx);
  }
}

module.exports = {
  getArticleList,
  addArticle,
  editArticle,
  deleteArticle,
};
