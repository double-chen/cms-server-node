const dayjs = require('dayjs');
const categoryMock = require('../mock/categoryMock');
const config = require('../config');
const { v4: uuidv4 } = require('uuid');
const db = require('../utils/db');

function buildCategoryTree(categories) {
  const categoryMap = new Map();

  // 将所有类别放入 map 中
  categories.forEach((category) => {
    category.children = [];
    categoryMap.set(category.id, category);
  });

  const tree = [];

  // 构建树结构
  categories.forEach((category) => {
    if (
      category.parentId === null ||
      categoryMap.get(category.parentId) === undefined
    ) {
      tree.push(category);
    } else {
      const parent = categoryMap.get(category.parentId);
      parent.children.push(category);
    }
  });

  return tree;
}

async function getCategoryList(parentId) {
  if (config.useMock) {
    return categoryMock.getCategoryList(parentId);
  }

  const conditions = [];
  const params = [];
  if (parentId !== undefined && parentId !== '-1') {
    conditions.push('parentId = ?');
    params.push(parentId);
  }

  const sql = `SELECT id,name,parentId,createTime,updateTime FROM Category
   ${conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : ''}`;

  const sqlResult = await db.query(sql, params);
  const result = buildCategoryTree(sqlResult);

  return result;
}

async function getCategoryById(id) {
  if (config.useMock) {
    return categoryMock.getCategoryById(id);
  }

  const sql = `SELECT id,name,parentId,createTime,updateTime FROM Category WHERE id = ?`;
  const params = [id];
  const result = await db.query(sql, params);

  return result[0];
}

async function addCategory(reqParams) {
  if (config.useMock) {
    return categoryMock.addCategory(reqParams);
  }

  const { name, parentId } = reqParams;
  const id = uuidv4();
  const createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `INSERT INTO Category (id, name, parentId, createTime, updateTime) VALUES (?, ?, ?, ?, ?)`;
  const params = [id, name, parentId, createTime, updateTime];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function editCategory(reqParams) {
  if (config.useMock) {
    return categoryMock.editCategory(reqParams);
  }

  const { id, name, parentId } = reqParams;
  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `UPDATE Category SET name = ?, parentId = ?, updateTime = ? WHERE id = ?`;
  const params = [name, parentId, updateTime, id];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function deleteCategory(ids) {
  if (config.useMock) {
    return categoryMock.deleteCategory(ids);
  }

  const placeholders = ids.map(() => '?').join(',');
  const sql = `DELETE FROM Category WHERE id IN (${placeholders})`;

  const params = ids;
  const result = await db.query(sql, params);
  return result.affectedRows;
}

module.exports = {
  getCategoryList,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
};
