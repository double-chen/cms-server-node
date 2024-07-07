const multer = require('@koa/multer');
const path = require('path');
const fileMock = require('../mock/fileMock');
const config = require('../config');
const { uploadDir } = require('../utils');

// 配置 multer 存储
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // 上传目录
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

async function uploadImg(ctx) {
  if (config.useMock) {
    return fileMock.uploadImg(ctx);
  }
}

async function uploadVideo(ctx) {
  if (config.useMock) {
    return fileMock.uploadVideo(ctx);
  }
}

const uploadFile = upload.single('file');

module.exports = {
  uploadImg,
  uploadVideo,
  uploadFile,
};
