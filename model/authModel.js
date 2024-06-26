const authMock = require('../mock/authMock');

async function getMenuList(ctx) {
  if (process.env.USE_MOCK) {
    return authMock.getMenuList(ctx);
  }
}

async function getAuthButtons(ctx) {
  if (process.env.USE_MOCK) {
    return authMock.getAuthButtons(ctx);
  }
}

module.exports = {
  getMenuList,
  getAuthButtons,
};
