const Mock = require('mockjs');

function login(ctx) {
  const { body } = ctx.request;
  return {
    code: (function () {
      if (
        (body.username === 'admin' &&
          body.password === 'e10adc3949ba59abbe56e057f20f883e') ||
        (body.username === 'user' &&
          body.password === 'e10adc3949ba59abbe56e057f20f883e')
      ) {
        return 200;
      } else {
        return 500;
      }
    })(),
    data: (function () {
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
    })(),
    msg: (function () {
      if (
        (body.username === 'admin' &&
          body.password === 'e10adc3949ba59abbe56e057f20f883e') ||
        (body.username === 'user' &&
          body.password === 'e10adc3949ba59abbe56e057f20f883e')
      ) {
        return '成功';
      } else {
        return '用户名或密码错误';
      }
    })(),
  };
}

function logout() {
  return {
    code: 200,
    msg: '成功',
  };
}

function getUserGender() {
  return {
    code: 200,
    data: [
      {
        genderLabel: '男',
        genderValue: 1,
      },
      {
        genderLabel: '女',
        genderValue: 2,
      },
    ],
    msg: '成功',
  };
}

function getUserStatus() {
  return {
    code: 200,
    data: [
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
    ],
    msg: '成功',
  };
}

function getUserList(ctx) {
  return {
    code: 200,
    data: (function () {
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
    })(),
    msg: '成功',
  };
}

function getUserDepartment() {
  return {
    code: 200,
    data: [
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
    ],
    msg: '成功',
  };
}

function addUser() {
  return {
    code: 200,
    msg: '成功',
  };
}

function editUser() {
  return {
    code: 200,
    msg: '成功',
  };
}

function deleteUser() {
  return {
    code: 200,
    msg: '成功',
  };
}

function resetUserPassword() {
  return {
    code: 200,
    msg: '成功',
  };
}

function exportUser() {
  return {
    code: 200,
    msg: '成功',
  };
}

function importUser() {
  return {
    code: 200,
    msg: '成功',
  };
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
};
