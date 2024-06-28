const Mock = require('mockjs');

function getArticleList(params) {
  const query = params;
  return (function () {
    return Mock.mock({
      'list|10': [
        {
          id: '@string(number,18)',
          name: '@ctitle(5, 10)',
          content: '',
          summary: '@cparagraph(3, 5)',
          categoryId: '@string(number,18)',
          categoryName: '@ctitle(2, 4)',
          'tagIds|1-5': ['@string(number,18)'],
          'tagNames|1-5': ['@string("lower", 4)'],
          thumbnail: '@image("200x200", "@color", "Thumbnail")',
          isPublish: '@boolean()',
          address: '@city(true)',
          createTime: '@date @time',
          updateTime: '@date @time',
        },
      ],
      pageNum: Number(query.pageNum),
      pageSize: Number(query.pageSize),
      total: 100,
    });
  })();
}

function getArticleById(id) {
  return Mock.mock({
    id: id,
    name: '@ctitle(5, 10)',
    content: '',
    summary: '@cparagraph(3, 5)',
    categoryId: '@string(number,18)',
    categoryName: '@ctitle(2, 4)',
    'tagIds|1-5': ['@string(number,18)'],
    'tagNames|1-5': ['@string("lower", 4)'],
    thumbnail: '@image("200x200", "@color", "Thumbnail")',
    isPublish: '@boolean()',
    address: '@city(true)',
    createTime: '@date @time',
    updateTime: '@date @time',
  });
}

function addArticle() {
  return 1;
}

function editArticle() {
  return 1;
}

function deleteArticle() {
  return 1;
}

module.exports = {
  getArticleList,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
};
