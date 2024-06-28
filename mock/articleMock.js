const Mock = require('mockjs');

function getArticleList(params) {
  const query = params;
  return {
    code: 200,
    data: (function () {
      return Mock.mock({
        'list|10': [
          {
            id: '@string(number,18)',
            name: '@ctitle(5, 10)',
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 100,
      });
    })(),
    msg: '成功',
  };
}

function addArticle() {
  return {
    code: 200,
    msg: '成功',
  };
}

function editArticle() {
  return {
    code: 200,
    msg: '成功',
  };
}

function deleteArticle() {
  return {
    code: 200,
    msg: '成功',
  };
}

module.exports = {
  getArticleList,
  addArticle,
  editArticle,
  deleteArticle,
};
