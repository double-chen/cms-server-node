const config = require('../config');
const authMock = require('../mocks/authMock');

async function getMenuList() {
  if (config.useMock) {
    return authMock.getMenuList();
  }
}

module.exports = {
  getMenuList,
};
