const path = require('path');
const fs = require('fs');

// 获取项目根目录
const rootDir = path.resolve(__dirname, '..'); // 上一级目录，即项目根目录
// 创建上传目录
const uploadDir = path.join(rootDir, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function buildTree(items) {
  const map = new Map();

  // 将所有类别放入 map 中
  items.forEach((item) => {
    item.children = [];
    map.set(item.id, item);
  });

  const tree = [];

  // 构建树结构
  items.forEach((item) => {
    console.log('item', item);
    if (item.parentId === null) {
      tree.push(item);
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(item);
      }
    }
  });

  return tree;
}

module.exports = {
  buildTree,
  rootDir,
  uploadDir,
};
