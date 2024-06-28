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
            username: query.username ? query.username : '@cname',
            gender: query.gender ? query.gender : '@integer(1, 2)',
            user: {
              detail: {
                age: query.age ? query.age : '@integer(10,30)',
              },
            },
            idCard: query.idCard ? query.idCard : '@id',
            email: query.email ? query.email : '@email',
            address: '@city(true)',
            createTime: '@date @time',
            status:
              query.status !== undefined ? query.status : '@integer(0, 1)',
            'avatar|1': [
              'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
              'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
              'https://i.imgtg.com/2023/01/16/QR57a.jpg',
              'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
            ],
            'children|3': [
              {
                id: '@string(number,18)',
                username: query.username ? query.username : '@cname',
                gender: query.gender ? query.gender : '@integer(1, 2)',
                user: {
                  detail: {
                    age: query.age ? query.age : '@integer(10,30)',
                  },
                },
                idCard: query.idCard ? query.idCard : '@id',
                email: query.email ? query.email : '@email',
                address: '@city(true)',
                createTime: '@date @time',
                status:
                  query.status !== undefined ? query.status : '@integer(0, 1)',
                'avatar|1': [
                  'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
                  'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
                  'https://i.imgtg.com/2023/01/16/QR57a.jpg',
                  'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
                ],
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
            username: query.username ? query.username : '@cname',
            gender: query.gender ? query.gender : '@integer(1, 2)',
            user: {
              detail: {
                age: query.age ? query.age : '@integer(10,30)',
              },
            },
            idCard: query.idCard ? query.idCard : '@id',
            email: query.email ? query.email : '@email',
            address: '@city(true)',
            createTime: '@date @time',
            status:
              query.status !== undefined ? query.status : '@integer(0, 1)',
            'avatar|1': [
              'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
              'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
              'https://i.imgtg.com/2023/01/16/QR57a.jpg',
              'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
            ],
            'children|3': [
              {
                id: '@string(number,18)',
                username: query.username ? query.username : '@cname',
                gender: query.gender ? query.gender : '@integer(1, 2)',
                user: {
                  detail: {
                    age: query.age ? query.age : '@integer(10,30)',
                  },
                },
                idCard: query.idCard ? query.idCard : '@id',
                email: query.email ? query.email : '@email',
                address: '@city(true)',
                createTime: '@date @time',
                status:
                  query.status !== undefined ? query.status : '@integer(0, 1)',
                'avatar|1': [
                  'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
                  'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
                  'https://i.imgtg.com/2023/01/16/QR57a.jpg',
                  'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
                ],
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
            username: query.username ? query.username : '@cname',
            gender: query.gender ? query.gender : '@integer(1, 2)',
            user: {
              detail: {
                age: query.age ? query.age : '@integer(10,30)',
              },
            },
            idCard: query.idCard ? query.idCard : '@id',
            email: query.email ? query.email : '@email',
            address: '@city(true)',
            createTime: '@date @time',
            status:
              query.status !== undefined ? query.status : '@integer(0, 1)',
            'avatar|1': [
              'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
              'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
              'https://i.imgtg.com/2023/01/16/QR57a.jpg',
              'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
            ],
            'children|3': [
              {
                id: '@string(number,18)',
                username: query.username ? query.username : '@cname',
                gender: query.gender ? query.gender : '@integer(1, 2)',
                user: {
                  detail: {
                    age: query.age ? query.age : '@integer(10,30)',
                  },
                },
                idCard: query.idCard ? query.idCard : '@id',
                email: query.email ? query.email : '@email',
                address: '@city(true)',
                createTime: '@date @time',
                status:
                  query.status !== undefined ? query.status : '@integer(0, 1)',
                'avatar|1': [
                  'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
                  'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
                  'https://i.imgtg.com/2023/01/16/QR57a.jpg',
                  'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
                ],
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
            username: query.username ? query.username : '@cname',
            gender: query.gender ? query.gender : '@integer(1, 2)',
            user: {
              detail: {
                age: query.age ? query.age : '@integer(10,30)',
              },
            },
            idCard: query.idCard ? query.idCard : '@id',
            email: query.email ? query.email : '@email',
            address: '@city(true)',
            createTime: '@date @time',
            status:
              query.status !== undefined ? query.status : '@integer(0, 1)',
            'avatar|1': [
              'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
              'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
              'https://i.imgtg.com/2023/01/16/QR57a.jpg',
              'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
            ],
            'children|3': [
              {
                id: '@string(number,18)',
                username: query.username ? query.username : '@cname',
                gender: query.gender ? query.gender : '@integer(1, 2)',
                user: {
                  detail: {
                    age: query.age ? query.age : '@integer(10,30)',
                  },
                },
                idCard: query.idCard ? query.idCard : '@id',
                email: query.email ? query.email : '@email',
                address: '@city(true)',
                createTime: '@date @time',
                status:
                  query.status !== undefined ? query.status : '@integer(0, 1)',
                'avatar|1': [
                  'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
                  'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
                  'https://i.imgtg.com/2023/01/16/QR57a.jpg',
                  'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
                ],
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
            username: query.username ? query.username : '@cname',
            gender: query.gender ? query.gender : '@integer(1, 2)',
            user: {
              detail: {
                age: query.age ? query.age : '@integer(10,30)',
              },
            },
            idCard: query.idCard ? query.idCard : '@id',
            email: query.email ? query.email : '@email',
            address: '@city(true)',
            createTime: '@date @time',
            status:
              query.status !== undefined ? query.status : '@integer(0, 1)',
            'avatar|1': [
              'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
              'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
              'https://i.imgtg.com/2023/01/16/QR57a.jpg',
              'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
            ],
            'children|3': [
              {
                id: '@string(number,18)',
                username: query.username ? query.username : '@cname',
                gender: query.gender ? query.gender : '@integer(1, 2)',
                user: {
                  detail: {
                    age: query.age ? query.age : '@integer(10,30)',
                  },
                },
                idCard: query.idCard ? query.idCard : '@id',
                email: query.email ? query.email : '@email',
                address: '@city(true)',
                createTime: '@date @time',
                status:
                  query.status !== undefined ? query.status : '@integer(0, 1)',
                'avatar|1': [
                  'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
                  'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
                  'https://i.imgtg.com/2023/01/16/QR57a.jpg',
                  'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
                ],
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
  addCategory,
  editCategory,
  deleteCategory,
};
