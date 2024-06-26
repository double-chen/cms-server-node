const userModel = require('../model/userModel');

class UserController {
  async login(ctx) {
    const result = await userModel.login(ctx);
    ctx.body = result;
  }

  async logout(ctx) {
    const result = await userModel.logout(ctx);
    ctx.body = result;
  }

  async getUserGender(ctx) {
    const result = await userModel.getUserGender(ctx);
    ctx.body = result;
  }

  async getUserStatus(ctx) {
    const result = await userModel.getUserStatus(ctx);
    ctx.body = result;
  }

  async getUserList(ctx) {
    const result = await userModel.getUserList(ctx);
    ctx.body = result;
  }

  async getUserDepartment(ctx) {
    const result = await userModel.getUserDepartment(ctx);
    ctx.body = result;
  }

  async addUser(ctx) {
    const result = await userModel.addUser(ctx);
    ctx.body = result;
  }

  async editUser(ctx) {
    const result = await userModel.editUser(ctx);
    ctx.body = result;
  }

  async deleteUser(ctx) {
    const result = await userModel.deleteUser(ctx);
    ctx.body = result;
  }

  async resetUserPassword(ctx) {
    const result = await userModel.resetUserPassword(ctx);
    ctx.body = result;
  }

  async exportUser(ctx) {
    const result = await userModel.exportUser(ctx);
    ctx.body = result;
  }

  async importUser(ctx) {
    const result = await userModel.importUser(ctx);
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
