const authMock = require('../mock/authMock');
const config = require('../config');
const utils = require('../utils');
const db = require('../utils/db');

async function getMenuList(user) {
  if (config.useMock) {
    return authMock.getMenuList(user);
  }

  const params = [user.roleId];
  const sql = `SELECT 
    ra.id,
    ra.path,
    ra.name,
    ra.component,
    ra.redirect,
    ra.meta,
    ra.parent_id as parentId
  FROM 
    RoleRoute rr
  JOIN 
    RouteAuth ra
  ON 
    rr.routeId = ra.id
  WHERE 
    rr.roleId = ?;`;
  const result = await db.query(sql, params);
  return utils.buildTree(result);
}

function groupByRouteName(buttonAuthData) {
  const groupedData = {};

  buttonAuthData.forEach((item) => {
    if (!groupedData[item.routeName]) {
      groupedData[item.routeName] = [];
    }
    groupedData[item.routeName].push(item.buttonName);
  });

  return groupedData;
}

async function getAuthButtons() {
  if (config.useMock) {
    return authMock.getAuthButtons();
  }
  const sql = `SELECT 
    buttonId,
    routeId,
    routeName,
    buttonName
  FROM 
    ButtonAuth;`;
  const result = await db.query(sql);
  const groupedButtonAuth = groupByRouteName(result);
  return groupedButtonAuth;
}

module.exports = {
  getMenuList,
  getAuthButtons,
};
