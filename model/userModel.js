const dayjs = require('dayjs');
const userMock = require('../mock/userMock');
const config = require('../config');
const db = require('../utils/db');

async function login(ctx) {
  if (config.useMock) {
    return userMock.login(ctx);
  }
}

async function logout(ctx) {
  if (config.useMock) {
    return userMock.logout(ctx);
  }
}

async function getUserGender(ctx) {
  if (config.useMock) {
    return userMock.getUserGender(ctx);
  }
}

async function getUserStatus(ctx) {
  if (config.useMock) {
    return userMock.getUserStatus(ctx);
  }
}

async function getUserList(ctx) {
  if (config.useMock) {
    return userMock.getUserList(ctx);
  }
}

async function getUserDepartment(ctx) {
  if (config.useMock) {
    return userMock.getUserDepartment(ctx);
  }
}

async function addUser(reqParams) {
  if (config.useMock) {
    return userMock.addUser(reqParams);
  }

  const {
    userId,
    username,
    gender,
    age,
    idCard,
    email,
    address,
    createTime,
    status,
    avatar,
    roleId,
    password,
  } = reqParams;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO Users (
    userId,
    username,
    gender,
    age,
    idCard,
    email,
    address,
    createTime,
    status,
    avatar,
    roleId,
    password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    userId,
    username,
    gender,
    age,
    idCard,
    email,
    address,
    createTime,
    status,
    avatar,
    roleId,
    hashedPassword,
  ];

  const result = await db.query(sql, params);
  return { userId: result.insertId, userName, email };
}

async function editUser(ctx) {
  if (config.useMock) {
    return userMock.editUser(ctx);
  }
}

async function deleteUser(ctx) {
  if (config.useMock) {
    return userMock.deleteUser(ctx);
  }
}

async function resetUserPassword(ctx) {
  if (config.useMock) {
    return userMock.resetUserPassword(ctx);
  }
}

async function exportUser(ctx) {
  if (config.useMock) {
    return userMock.exportUser(ctx);
  }
}

async function importUser(ctx) {
  if (config.useMock) {
    return userMock.importUser(ctx);
  }
}

async function getRoleList(ctx) {
  if (config.useMock) {
    return userMock.getRoleList(ctx);
  }
}

async function getUserTreeList(ctx) {
  if (config.useMock) {
    return userMock.getUserTreeList(ctx);
  }
}

async function changeUser(ctx) {
  if (config.useMock) {
    return userMock.changeUser(ctx);
  }
}

// 查找用户
async function findUserByUserName(userName) {
  const sql =
    'SELECT userId,username,gender,age,idCard,email,address,createTime,status,avatar,roleId FROM Users WHERE username = ?';

  const params = [userName];
  const result = await db.query(sql, params);

  return result[0];
}

// 验证用户凭证
async function validateUser(userName, password) {
  const user = await findUserByUserName(userName);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
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
  findUserByUserName,
  validateUser,
};
