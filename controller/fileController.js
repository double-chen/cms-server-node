const fileModel = require('../model/fileModel');

class FileController {
  async uploadImg(ctx) {
    return fileModel.uploadImg(ctx);
  }

  async uploadVideo(ctx) {
    return fileModel.uploadVideo(ctx);
  }
}

module.exports = new FileController();
