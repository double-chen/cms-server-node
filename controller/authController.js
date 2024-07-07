const authModel = require('../model/authModel');

class AuthController {
  async getMenuList(ctx) {
    const { user } = ctx.state;
    const result = await authModel.getMenuList(user);
    ctx.body = result;
  }

  async getAuthButtons(ctx) {
    const result = await authModel.getAuthButtons(ctx);
    ctx.body = result;
  }
}

module.exports = new AuthController();
