const userMock = require('../mock/userMock');
const config = require('../config');

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

async function addUser(ctx) {
  if (config.useMock) {
    return userMock.addUser(ctx);
  }
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
