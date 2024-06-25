const config = require('../config');
const authMock = require('../mocks/authMock');

async function getMenuList(ctx) {
  if (config.useMock) {
    return authMock.getMenuList(ctx);
  }
}

module.exports = {
  getMenuList,
};
