const userMock = require('../mock/userMock');

async function login(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.login(ctx);
  }
}

async function logout(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.logout(ctx);
  }
}

async function getUserGender(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.getUserGender(ctx);
  }
}

async function getUserStatus(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.getUserStatus(ctx);
  }
}

async function getUserList(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.getUserList(ctx);
  }
}

async function getUserDepartment(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.getUserDepartment(ctx);
  }
}

async function addUser(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.addUser(ctx);
  }
}

async function editUser(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.editUser(ctx);
  }
}

async function deleteUser(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.deleteUser(ctx);
  }
}

async function resetUserPassword(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.resetUserPassword(ctx);
  }
}

async function exportUser(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.exportUser(ctx);
  }
}

async function importUser(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.importUser(ctx);
  }
}

async function getRoleList(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.getRoleList(ctx);
  }
}

async function getUserTreeList(ctx) {
  if (process.env.USE_MOCK) {
    return userMock.getUserTreeList(ctx);
  }
}

async function changeUser(ctx) {
  if (process.env.USE_MOCK) {
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
