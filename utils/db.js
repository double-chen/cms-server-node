const mysql = require('mysql2/promise');

// 创建数据库连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 封装查询函数
async function query(sql, params) {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.execute(sql, params);
    return rows;
  } finally {
    connection.release();
  }
}

module.exports = {
  query,
  pool, // 如果需要直接访问连接池
};
