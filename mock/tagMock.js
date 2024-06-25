const Mock = require('mockjs');

function getTagList(ctx) {
  const query = ctx.request.body;
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

function addTag() {
  return {
    code: 200,
    msg: '成功',
  };
}

function editTag() {
  return {
    code: 200,
    msg: '成功',
  };
}

function deleteTag() {
  return {
    code: 200,
    msg: '成功',
  };
}

module.exports = {
  getTagList,
  addTag,
  editTag,
  deleteTag,
};
