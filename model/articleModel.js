const dayjs = require('dayjs');
const { v4: uuidv4 } = require('uuid');
const articleMock = require('../mock/articleMock');
const db = require('../utils/db');
const config = require('../config');

async function getArticleList(resParams) {
  if (config.useMock) {
    return articleMock.getArticleList(resParams);
  }

  const conditions = [];
  const params = [];

  const {
    title,
    startTime: startTimeR,
    endTime: endTimeR,
    isPublished,
    categoryId,
    tagIds,
    pageNum: pageNumR = 1,
    pageSize: pageSizeR = 10,
  } = resParams;

  // 防止sql注入
  const pageNum = parseInt(pageNumR, 10);
  const pageSize = parseInt(pageSizeR, 10);

  const offset = (pageNum - 1) * pageSize;
  if (title) {
    conditions.push('a.title LIKE ?');
    params.push(`%${title}%`);
  }

  if (startTimeR && endTimeR) {
    const startTime = dayjs(startTimeR)
      .startOf('day')
      .format('YYYY-MM-DD HH:mm:ss');
    const endTime = dayjs(endTimeR).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    conditions.push('a.createTime BETWEEN ? AND ?');
    params.push(startTime, endTime);
  } else if (startTimeR) {
    const startTime = dayjs(startTimeR)
      .startOf('day')
      .format('YYYY-MM-DD HH:mm:ss');
    conditions.push('a.createTime >= ?');
    params.push(startTime);
  } else if (endTimeR) {
    const endTime = dayjs(endTimeR).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    conditions.push('a.createTime <= ?');
    params.push(endTime);
  }

  if (isPublished !== undefined) {
    conditions.push('a.isPublished = ?');
    params.push(isPublished);
  }

  if (categoryId) {
    conditions.push('a.categoryId = ?');
    params.push(categoryId);
  }

  if (tagIds && tagIds.length > 0) {
    const tagPlaceholders = tagIds.map(() => '?').join(', ');
    conditions.push(`jt.tagId IN (${tagPlaceholders})`);
    params.push(...tagIds);
  }

  const sql = `SELECT 
    a.id AS articleId,
    a.title AS articleTitle,
    a.content AS articleContent,
    a.summary AS articleSummary,
    a.thumbnail AS articleThumbnail,
    a.isPublish AS articleIsPublish,
    a.createTime AS articleCreateTime,
    a.updateTime AS articleUpdateTime,
    c.id AS categoryId,
    c.name AS categoryName,
    c.parentId AS categoryParentId,
    c.createTime AS categoryCreateTime,
    c.updateTime AS categoryUpdateTime,
    GROUP_CONCAT(t.name) AS tagNames
    FROM 
        Article a
    JOIN 
        Category c ON a.categoryId = c.id
    LEFT JOIN 
        JSON_TABLE(
            a.tagIds,
            '$[*]' COLUMNS (tagId VARCHAR(255) PATH '$')
        ) jt ON TRUE
    LEFT JOIN 
        Tag t ON jt.tagId = t.id
     ${conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : ''}
    GROUP BY 
        a.id, c.id   
    ORDER BY a.createTime DESC
    LIMIT ${pageSize} OFFSET ${offset};`;

  return await db.query(sql, params);
}

async function getArticleById(id) {
  if (config.useMock) {
    return articleMock.getArticleById(id);
  }

  const sql = `SELECT title,content,summary,categoryId,tagIds,thumbnail,isPublish FROM Article WHERE id = ?`;
  const params = [id];

  const result = await db.query(sql, params);
  console.log('getArticleById:result', result);

  return result[0];
}

async function addArticle(reqParams) {
  if (config.useMock) {
    return articleMock.addArticle(reqParams);
  }
  const { title, content, summary, categoryId, tagIds, thumbnail, isPublish } =
    reqParams;

  const id = uuidv4();
  const createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `
        INSERT INTO Article (
            id, 
            title, 
            content, 
            summary, 
            categoryId, 
            tagIds, 
            thumbnail, 
            isPublish, 
            createTime, 
            updateTime
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
  const params = [
    id,
    title,
    content,
    summary,
    categoryId,
    JSON.stringify(tagIds),
    thumbnail,
    isPublish,
    createTime,
    updateTime,
  ];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function editArticle(reqParams) {
  if (config.useMock) {
    return articleMock.editArticle(reqParams);
  }

  const {
    id,
    title,
    content,
    summary,
    categoryId,
    tagIds,
    thumbnail,
    isPublish,
  } = reqParams;

  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `
  UPDATE Article
  SET 
      title = ?, 
      content = ?, 
      summary = ?, 
      categoryId = ?, 
      tagIds = ?, 
      thumbnail = ?, 
      isPublish = ?,  
      updateTime = ?
  WHERE id = ?;
`;
  const params = [
    title,
    content,
    summary,
    categoryId,
    JSON.stringify(tagIds),
    thumbnail,
    isPublish,
    updateTime,
    id,
  ];
  const result = await query(sql, params);
  return result.affectedRows;
}

async function deleteArticle(id) {
  if (config.useMock) {
    return articleMock.deleteArticle(id);
  }

  const sql = `DELETE FROM Article WHERE id = ?;`;
  const params = [id];
  const result = await query(sql, params);
  return result.affectedRows;
}

module.exports = {
  getArticleList,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
};
