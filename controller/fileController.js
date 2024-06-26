const fileModel = require('../model/fileModel');

class FileController {
  async uploadImg(ctx) {
    const result = await fileModel.uploadImg(ctx);
    ctx.body = result;
  }

  async uploadVideo(ctx) {
    const result = await fileModel.uploadVideo(ctx);
    ctx.body = result;
  }
}

module.exports = new FileController();
