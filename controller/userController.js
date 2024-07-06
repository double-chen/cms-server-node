const jwt = require('jsonwebtoken');
const fs = require('fs');
const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
} = require('../validators/userValidator');
const userModel = require('../model/userModel');
const config = require('../config');

class UserController {
  async login(ctx) {
    const params = ctx.request.body;
    const result = await userModel.validateUser(
      params.username,
      params.password
    );
    if (result) {
      const token = jwt.sign(
        { username: result.username, roleId: result.roleId },
        config.SECRET_KEY,
        {
          expiresIn: '90d',
        }
      ); // 设置有效期为 3 个月

      ctx.body = { access_token: token };
    } else {
      ctx.throw(401, '用户名或密码无效');
    }
  }

  // 登出不需要调用接口，在前端清除token即可。
  async logout(ctx) {
    const result = await userModel.logout();
    ctx.body = result;
  }

  async getUserGender(ctx) {
    const result = await userModel.getUserGender();
    ctx.body = result;
  }

  async getUserStatus(ctx) {
    const result = await userModel.getUserStatus();
    ctx.body = result;
  }

  async getUserList(ctx) {
    const params = ctx.request.body;
    const result = await userModel.getUserList(params);
    ctx.body = result;
  }

  async getUserDepartment(ctx) {
    const result = await userModel.getUserDepartment();
    ctx.body = result;
  }

  async addUser(ctx) {
    const params = ctx.request.body;

    const { error } = validateCreateUser(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await userModel.addUser(params);
    ctx.body = result;
  }

  async editUser(ctx) {
    const params = ctx.request.body;

    const { error } = validateUpdateUser(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await userModel.editUser(params);
    ctx.body = result;
  }

  async deleteUser(ctx) {
    const params = ctx.request.body;

    const { error } = validateDeleteUser(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await userModel.deleteUser(params.userId);
    ctx.body = result;
  }

  async resetUserPassword(ctx) {
    const params = ctx.request.body;
    const result = await userModel.resetUserPassword(
      params.userId,
      params.password
    );
    ctx.body = result;
  }

  async exportUser(ctx) {
    const params = ctx.request.body;
    const { filePath, fileName, callback } = await userModel.exportUser(params);

    // 设置响应头以便下载文件
    ctx.set('Content-disposition', `attachment; filename=${fileName}`);
    ctx.set(
      'Content-type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    ctx.body = fs.createReadStream(filePath);

    // 删除临时文件
    ctx.res.on('finish', callback);
  }

  async importUser(ctx) {
    const result = await userModel.importUser(ctx.file);
    ctx.body = result;
  }

  async getRoleList(ctx) {
    const result = await userModel.getRoleList(ctx);
    ctx.body = result;
  }

  async getUserTreeList(ctx) {
    const result = await userModel.getUserTreeList(ctx);
    ctx.body = result;
  }

  async changeUser(ctx) {
    const result = await userModel.changeUser(ctx);
    ctx.body = result;
  }
}

module.exports = new UserController();
