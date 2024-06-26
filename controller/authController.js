const authModel = require('../model/authModel');

class AuthController {
  async getMenuList(ctx) {
    return authModel.getMenuList(ctx);
  }

  async getAuthButtons(ctx) {
    return authModel.getAuthButtons(ctx);
  }
}

module.exports = new AuthController();
