const userModel = require('../model/userModel');

class UserController {
  async login(ctx) {
    return userModel.login(ctx);
  }

  async logout(ctx) {
    return userModel.logout(ctx);
  }

  async getUserGender(ctx) {
    return userModel.getUserGender(ctx);
  }

  async getUserStatus(ctx) {
    return userModel.getUserStatus(ctx);
  }

  async getUserList(ctx) {
    return userModel.getUserList(ctx);
  }

  async getUserDepartment(ctx) {
    return userModel.getUserDepartment(ctx);
  }

  async addUser(ctx) {
    return userModel.addUser(ctx);
  }

  async editUser(ctx) {
    return userModel.editUser(ctx);
  }

  async deleteUser(ctx) {
    return userModel.deleteUser(ctx);
  }

  async resetUserPassword(ctx) {
    return userModel.resetUserPassword(ctx);
  }

  async exportUser(ctx) {
    return userModel.exportUser(ctx);
  }

  async importUser(ctx) {
    return userModel.importUser(ctx);
  }

  async getRoleList(ctx) {
    return userModel.getRoleList(ctx);
  }

  async getUserTreeList(ctx) {
    return userModel.getUserTreeList(ctx);
  }

  async changeUser(ctx) {
    return userModel.changeUser(ctx);
  }
}

module.exports = new UserController();
