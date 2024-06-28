const Mock = require('mockjs');

function getTagList(ctx) {
  const query = ctx.request.body;
  return (function () {
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
  })();
}

function getTagById(id) {
  return Mock.mock({
    id,
    name: '@ctitle(5, 10)',
  });
}

function addTag() {
  return 1;
}

function editTag() {
  return 1;
}

function deleteTag() {
  return 1;
}

module.exports = {
  getTagList,
  getTagById,
  addTag,
  editTag,
  deleteTag,
};
