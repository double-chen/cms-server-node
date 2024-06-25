const config = require('../config');
const authMock = require('../mock/authMock');

async function getMenuList(ctx) {
  if (config.useMock) {
    return authMock.getMenuList(ctx);
  }
}

async function getAuthButtons(ctx) {
  if (config.useMock) {
    return authMock.getAuthButtons(ctx);
  }
}

module.exports = {
  getMenuList,
  getAuthButtons,
};
