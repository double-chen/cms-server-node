const Mock = require('mockjs');

function getCategoryList(ctx) {
  const query = ctx.request.body;
  return (function () {
    if (
      query.username ||
      query.gender ||
      query.age ||
      query.idCard ||
      query.email ||
      query.status !== undefined
    ) {
      return Mock.mock({
        'list|10': [
          {
            id: '@string(number,18)',
            parentId: '@string(number,18)',
            name: '@ctitle(5, 10)',
            createTime: '@date @time',
            updateTime: '@date @time',
            'children|3': [
              {
                id: '@string(number,18)',
                parentId: '@string(number,18)',
                name: '@ctitle(5, 10)',
                createTime: '@date @time',
                updateTime: '@date @time',
              },
            ],
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 18,
      });
    } else if (query.pageSize == 25) {
      return Mock.mock({
        'list|25': [
          {
            id: '@string(number,18)',
            parentId: '@string(number,18)',
            name: '@ctitle(5, 10)',
            createTime: '@date @time',
            updateTime: '@date @time',
            'children|3': [
              {
                id: '@string(number,18)',
                parentId: '@string(number,18)',
                name: '@ctitle(5, 10)',
                createTime: '@date @time',
                updateTime: '@date @time',
              },
            ],
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 2000,
      });
    } else if (query.pageSize == 50) {
      return Mock.mock({
        'list|50': [
          {
            id: '@string(number,18)',
            parentId: '@string(number,18)',
            name: '@ctitle(5, 10)',
            createTime: '@date @time',
            updateTime: '@date @time',
            'children|3': [
              {
                id: '@string(number,18)',
                parentId: '@string(number,18)',
                name: '@ctitle(5, 10)',
                createTime: '@date @time',
                updateTime: '@date @time',
              },
            ],
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 2000,
      });
    } else if (query.pageSize == 100) {
      return Mock.mock({
        'list|100': [
          {
            id: '@string(number,18)',
            parentId: '@string(number,18)',
            name: '@ctitle(5, 10)',
            createTime: '@date @time',
            updateTime: '@date @time',
            'children|3': [
              {
                id: '@string(number,18)',
                parentId: '@string(number,18)',
                name: '@ctitle(5, 10)',
                createTime: '@date @time',
                updateTime: '@date @time',
              },
            ],
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 2000,
      });
    } else {
      return Mock.mock({
        'list|10': [
          {
            id: '@string(number,18)',
            parentId: '@string(number,18)',
            name: '@ctitle(5, 10)',
            createTime: '@date @time',
            updateTime: '@date @time',
            'children|3': [
              {
                id: '@string(number,18)',
                parentId: '@string(number,18)',
                name: '@ctitle(5, 10)',
                createTime: '@date @time',
                updateTime: '@date @time',
              },
            ],
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 2000,
      });
    }
  })();
}

function getCategoryById(id) {
  return Mock.mock({
    id,
    parentId: '@string(number,18)',
    name: '@ctitle(5, 10)',
    createTime: '@date @time',
    updateTime: '@date @time',
  });
}

function addCategory() {
  return 1;
}

function editCategory() {
  return 1;
}

function deleteCategory() {
  return 1;
}

module.exports = {
  getCategoryList,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
};
