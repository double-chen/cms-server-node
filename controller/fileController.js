const fileModel = require('../model/fileModel');

class FileController {
  constructor() {
    this.uploadFile = fileModel.uploadFile.bind(fileModel); // 绑定中间件
  }

  async uploadImg(ctx) {
    const result = await fileModel.uploadImg(ctx);
    ctx.body = result;
  }

  async uploadVideo(ctx) {
    const result = await fileModel.uploadVideo(ctx);
    ctx.body = result;
  }
  async uploadFileCallback(ctx) {
    const file = ctx.file; // 获取上传的文件信息
    if (!file) {
      ctx.status = 400;
      ctx.body = { error: 'No file uploaded' };
      return;
    }

    const fileUrl = `${ctx.origin}/uploads/${ctx.file.filename}`;
    ctx.body = {
      filename: file.originalname, // 原始文件名
      fileUrl, // 上传后的文件路径
    };
  }
}

module.exports = new FileController();
