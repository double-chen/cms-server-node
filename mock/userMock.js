const Mock = require('mockjs');

function login(ctx) {
  const { body } = ctx.request;

  if (
    body.username === 'admin' &&
    body.password === 'e10adc3949ba59abbe56e057f20f883e'
  )
    return Mock.mock({
      access_token: 'bqddxxwqmfncffacvbpkuxvwvqrhln',
    });
  if (
    body.username === 'user' &&
    body.password === 'e10adc3949ba59abbe56e057f20f883e'
  )
    return Mock.mock({
      access_token: 'unufvdotdqxuzfbdygovfmsbftlvbn',
    });

  return false;

  // return {
  //   code: (function () {
  //     if (
  //       (body.username === 'admin' &&
  //         body.password === 'e10adc3949ba59abbe56e057f20f883e') ||
  //       (body.username === 'user' &&
  //         body.password === 'e10adc3949ba59abbe56e057f20f883e')
  //     ) {
  //       return 200;
  //     } else {
  //       return 500;
  //     }
  //   })(),
  //   data: (function () {
  //     if (
  //       body.username === 'admin' &&
  //       body.password === 'e10adc3949ba59abbe56e057f20f883e'
  //     )
  //       return Mock.mock({
  //         access_token: 'bqddxxwqmfncffacvbpkuxvwvqrhln',
  //       });
  //     if (
  //       body.username === 'user' &&
  //       body.password === 'e10adc3949ba59abbe56e057f20f883e'
  //     )
  //       return Mock.mock({
  //         access_token: 'unufvdotdqxuzfbdygovfmsbftlvbn',
  //       });
  //   })(),
  //   msg: (function () {
  //     if (
  //       (body.username === 'admin' &&
  //         body.password === 'e10adc3949ba59abbe56e057f20f883e') ||
  //       (body.username === 'user' &&
  //         body.password === 'e10adc3949ba59abbe56e057f20f883e')
  //     ) {
  //       return '成功';
  //     } else {
  //       return '用户名或密码错误';
  //     }
  //   })(),
  // };
}

function logout() {
  return true;
}

function getUserGender() {
  return [
    {
      genderLabel: '男',
      genderValue: 1,
    },
    {
      genderLabel: '女',
      genderValue: 2,
    },
  ];
}

function getUserStatus() {
  return [
    {
      userLabel: '启用',
      userStatus: 1,
      tagType: 'success',
    },
    {
      userLabel: '禁用',
      userStatus: 0,
      tagType: 'danger',
    },
  ];
}

function getUserList(ctx) {
  return (function () {
    const query = ctx.request.body;
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
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 2000,
      });
    }
  })();
}

function getUserDepartment() {
  return [
    {
      id: '1',
      name: '华东分部',
      children: [
        {
          id: '11',
          name: '研发部',
        },
        {
          id: '12',
          name: '市场部',
        },
        {
          id: '13',
          name: '商务部',
        },
        {
          id: '14',
          name: '财务部',
        },
      ],
    },
    {
      id: '2',
      name: '华南分部',
      children: [
        {
          id: '21',
          name: '研发部',
        },
        {
          id: '22',
          name: '市场部',
        },
        {
          id: '23',
          name: '商务部',
        },
        {
          id: '24',
          name: '财务部',
        },
      ],
    },
    {
      id: '3',
      name: '西北分部',
      children: [
        {
          id: '31',
          name: '研发部',
        },
        {
          id: '32',
          name: '市场部',
        },
        {
          id: '33',
          name: '商务部',
        },
        {
          id: '34',
          name: '财务部',
        },
      ],
    },
  ];
}

function addUser() {
  return 1;
}

function editUser() {
  return 1;
}

function deleteUser() {
  return 1;
}

function resetUserPassword() {
  return 1;
}

function exportUser() {
  return 1;
}

function importUser() {
  return 1;
}

function getRoleList() {
  return [
    {
      label: '全部',
      value: '',
    },
    {
      label: '超级管理员',
      value: '1',
    },
    {
      label: '公司CEO',
      value: '2',
    },
    {
      label: '部门主管',
      value: '3',
    },
    {
      label: '人事经理',
      value: '4',
    },
  ];
}

function getUserTreeList() {
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

function changeUser() {
  return 1;
}

module.exports = {
  login,
  logout,
  getUserGender,
  getUserStatus,
  getUserList,
  getUserDepartment,
  addUser,
  editUser,
  deleteUser,
  resetUserPassword,
  exportUser,
  importUser,
  getRoleList,
  getUserTreeList,
  changeUser,
};
