const authModel = require('../model/authModel');

class AuthController {
  async getMenuList(ctx) {
    const result = await authModel.getMenuList(ctx);
    ctx.body = result;
  }

  async getAuthButtons(ctx) {
    const result = await authModel.getAuthButtons(ctx);
    ctx.body = result;
  }
}

module.exports = new AuthController();
