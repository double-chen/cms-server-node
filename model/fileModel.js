const config = require('../config');
const fileMock = require('../mock/fileMock');

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

module.exports = {
  uploadImg,
  uploadVideo,
};
