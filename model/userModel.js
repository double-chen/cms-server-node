const dayjs = require('dayjs');
const bcrypt = require('bcrypt');
const xlsx = require('xlsx');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const userMock = require('../mock/userMock');
const config = require('../config');
const db = require('../utils/db');

async function login(ctx) {
  if (config.useMock) {
    return userMock.login(ctx);
  }
}

async function logout(ctx) {
  if (config.useMock) {
    return userMock.logout(ctx);
  }
}

// 就两条数据就不写数据库了
async function getUserGender(ctx) {
  if (config.useMock) {
    return userMock.getUserGender(ctx);
  }

  return [
    {
      genderLabel: '男',
      genderValue: 1,
    },
    {
      genderLabel: '女',
      genderValue: 2,
    },
  ];
}

async function getUserStatus(ctx) {
  if (config.useMock) {
    return userMock.getUserStatus(ctx);
  }

  return [
    {
      userLabel: '启用',
      userStatus: 1,
      tagType: 'success',
    },
    {
      userLabel: '禁用',
      userStatus: 0,
      tagType: 'danger',
    },
  ];
}

async function getUserDepartment(ctx) {
  if (config.useMock) {
    return userMock.getUserDepartment(ctx);
  }

  return [
    {
      id: '1',
      name: '华东分部',
      children: [
        {
          id: '11',
          name: '研发部',
        },
        {
          id: '12',
          name: '市场部',
        },
        {
          id: '13',
          name: '商务部',
        },
        {
          id: '14',
          name: '财务部',
        },
      ],
    },
    {
      id: '2',
      name: '华南分部',
      children: [
        {
          id: '21',
          name: '研发部',
        },
        {
          id: '22',
          name: '市场部',
        },
        {
          id: '23',
          name: '商务部',
        },
        {
          id: '24',
          name: '财务部',
        },
      ],
    },
    {
      id: '3',
      name: '西北分部',
      children: [
        {
          id: '31',
          name: '研发部',
        },
        {
          id: '32',
          name: '市场部',
        },
        {
          id: '33',
          name: '商务部',
        },
        {
          id: '34',
          name: '财务部',
        },
      ],
    },
  ];
}

async function getUserList(resParams) {
  if (config.useMock) {
    return userMock.getUserList(resParams);
  }

  const {
    username,
    pageNum: pageNumR = 1,
    pageSize: pageSizeR = 10,
  } = resParams;

  // 防止sql注入
  const pageNum = parseInt(pageNumR, 10);
  const pageSize = parseInt(pageSizeR, 10);

  const offset = (pageNum - 1) * pageSize;

  const conditions = [];
  const params = [];

  if (username) {
    conditions.push('username LIKE ?');
    params.push(`%${username}%`);
  }

  const sql = `SELECT userId,
       username,
       gender,
       age,
       idCard,
       email,
       address,
       createTime,
       status,
       avatar,
       roleId
    FROM Users
   ${conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : ''}
    ORDER BY createTime DESC
    LIMIT ${pageSize} OFFSET ${offset};
  `;

  const result = await db.query(sql, params);

  return result;
}

async function addUser(reqParams) {
  if (config.useMock) {
    return userMock.addUser(reqParams);
  }

  const {
    username,
    gender,
    age,
    idCard,
    email,
    address,
    status,
    avatar,
    roleId,
    password,
  } = reqParams;

  const hashedPassword = await bcrypt.hash(password, 10);
  const createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const sql = `INSERT INTO Users ( 
    username,
    gender,
    age,
    idCard,
    email,
    address,
    createTime,
    status,
    avatar,
    roleId,
    password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    username,
    gender,
    age,
    idCard,
    email,
    address,
    createTime,
    status,
    avatar,
    roleId,
    hashedPassword,
  ];

  const result = await db.query(sql, params);
  return { userId: result.insertId, username, email };
}

async function editUser(reqParams) {
  if (config.useMock) {
    return userMock.editUser(reqParams);
  }

  const {
    userId,
    username,
    gender,
    age,
    idCard,
    email,
    address,
    status,
    avatar,
    roleId,
  } = reqParams;

  const sql = `
  UPDATE Users
  SET 
      username = ?, 
      gender = ?, 
      age = ?, 
      idCard = ?, 
      email = ?, 
      address = ?,  
      status = ?, 
      avatar = ?, 
      roleId = ?
  WHERE userId = ?;
`;
  const params = [
    username,
    gender,
    age,
    idCard,
    email,
    address,
    status,
    avatar,
    roleId,
    userId,
  ];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function deleteUser(userId) {
  if (config.useMock) {
    return userMock.deleteUser(userId);
  }

  const sql = `DELETE FROM Users WHERE userId = ?;`;
  const params = [userId];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function resetUserPassword(userId, password) {
  if (config.useMock) {
    return userMock.resetUserPassword(userId, password);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `
    UPDATE Users
    SET 
        password = ?
    WHERE userId = ?;`;
  const params = [hashedPassword, userId];
  const result = await db.query(sql, params);
  return result.affectedRows;
}

async function exportUser(reqParams) {
  if (config.useMock) {
    return userMock.exportUser(reqParams);
  }

  const [rows] = await getUserList(reqParams);

  // 将数据转换为 Excel 文件
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(rows);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Users');

  const fileName = `users_${uuidv4()}.xlsx`;
  // 保存 Excel 文件到临时目录
  const exportDir = path.join(__dirname, 'exports');
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
  }
  const filePath = path.join(exportDir, fileName);
  xlsx.writeFile(workbook, filePath);

  const callback = () => {
    fs.unlinkSync(filePath);
  };

  return { filePath, fileName, callback };
}

/* // 前端使用exportUser来下载的代码
async exportData() {
  try {
    const response = await axios.get('/export', {
      responseType: 'blob', // 确保响应类型为 Blob
    });

    const blob = new Blob([response.data], { type: response.data.type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;

    // 从响应头中获取文件名
    const contentDisposition = response.headers['content-disposition'];
    let fileName = 'export.xlsx';
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="?(.+)"?/);
      if (match && match.length === 2) {
        fileName = match[1];
      }
    }

    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    // 释放对象 URL
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error exporting data:', error);
    alert('Failed to export data');
  }
} 
*/

async function importUser(file) {
  if (config.useMock) {
    return userMock.importUser(file);
  }

  if (!file) {
    return;
  }

  // 解析 Excel 文件
  const workbook = xlsx.readFile(file.path);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  // 构建批量插入的 SQL 语句
  const sql = `
  INSERT INTO Users (username, gender, age, idCard, email, address, createTime, status, avatar, roleId, password)
  VALUES ?
`;

  // 创建插入数据的值数组
  const params = data.map((row) => [
    row.username,
    row.gender,
    row.age,
    row.idCard,
    row.email,
    row.address,
    new Date(row.createTime),
    row.status,
    row.avatar,
    row.roleId,
    row.password,
  ]);

  const result = await query(sql, params);

  // 删除临时文件
  fs.unlinkSync(file.path);
  return result.affectedRows;
}

async function getRoleList(resParams) {
  if (config.useMock) {
    return userMock.getRoleList(resParams);
  }

  const {
    roleName,
    pageNum: pageNumR = 1,
    pageSize: pageSizeR = 10,
  } = resParams;

  // 防止sql注入
  const pageNum = parseInt(pageNumR, 10);
  const pageSize = parseInt(pageSizeR, 10);

  const offset = (pageNum - 1) * pageSize;

  const conditions = [];
  const params = [];

  if (roleName) {
    conditions.push('roleName LIKE ?');
    params.push(`%${roleName}%`);
  }

  const sql = `SELECT roleId,
       roleName,
       description 
    FROM Roles
   ${conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : ''}
    LIMIT ${pageSize} OFFSET ${offset};
   `;

  const result = await db.query(sql, params);

  return result;
}

// todo 先不写了
async function getUserTreeList(ctx) {
  if (config.useMock) {
    return userMock.getUserTreeList(ctx);
  }

  return userMock.getUserTreeList(ctx);
}

async function changeUser(userId, status) {
  if (config.useMock) {
    return userMock.changeUser(status);
  }

  const sql = `
    UPDATE Users
    SET 
        status = ?
    WHERE userId = ?;`;
  const params = [status, userId];
  const result = await query(sql, params);
  return result.affectedRows;
}

// 查找用户
async function findUserByUserName(userName) {
  const sql =
    'SELECT userId,username,gender,age,idCard,email,address,createTime,status,avatar,roleId,password FROM Users WHERE username = ?';

  const params = [userName];
  const result = await db.query(sql, params);

  return result[0];
}

// 验证用户凭证
async function validateUser(userName, password) {
  const user = await findUserByUserName(userName);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
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
  findUserByUserName,
  validateUser,
};
