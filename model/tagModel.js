const dayjs = require('dayjs');
const tagMock = require('../mock/tagMock');
const config = require('../config');
const { v4: uuidv4 } = require('uuid');
const db = require('../utils/db');

async function getTagList(name) {
  if (config.useMock) {
    return tagMock.getTagList(name);
  }

  const conditions = [];
  const params = [];
  if (name !== undefined && name !== '-1') {
    conditions.push('name = ?');
    params.push(name);
  }

  const sql = `SELECT id,name FROM Tag  ${
    conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : ''
  }`;

  return await db.query(sql, params);
}

async function getTagById(id) {
  if (config.useMock) {
    return tagMock.getTagById(id);
  }

  const sql = `SELECT id,name FROM Tag WHERE id = ?`;
  const params = [id];
  const result = await db.query(sql, params);

  return result[0];
}

async function addTag(reqParams) {
  if (config.useMock) {
    return tagMock.addTag(reqParams);
  }

  const { name } = reqParams;
  const id = uuidv4();
  const createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `INSERT INTO Tag (id, name, createTime, updateTime) VALUES (?, ?, ?, ?)`;
  const params = [id, name, createTime, updateTime];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function editTag(reqParams) {
  if (config.useMock) {
    return tagMock.editTag(reqParams);
  }

  const { id, name } = reqParams;
  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `UPDATE Tag SET name = ?, updateTime = ? WHERE id = ?`;
  const params = [name, updateTime, id];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function deleteTag(ids) {
  if (config.useMock) {
    return tagMock.deleteTag(ids);
  }

  const placeholders = ids.map(() => '?').join(',');
  const sql = `DELETE FROM Tag WHERE id IN (${placeholders})`;
  const params = ids;
  const result = await db.query(sql, params);
  return result.affectedRows;
}

module.exports = {
  getTagList,
  addTag,
  editTag,
  deleteTag,
  getTagById,
};
