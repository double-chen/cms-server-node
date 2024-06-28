const fileMock = require('../mock/fileMock');
const config = require('../config');

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
