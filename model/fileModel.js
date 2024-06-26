const fileMock = require('../mock/fileMock');

async function uploadImg(ctx) {
  if (process.env.USE_MOCK) {
    return fileMock.uploadImg(ctx);
  }
}

async function uploadVideo(ctx) {
  if (process.env.USE_MOCK) {
    return fileMock.uploadVideo(ctx);
  }
}

module.exports = {
  uploadImg,
  uploadVideo,
};
