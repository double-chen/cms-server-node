const articleModel = require('../model/articleModel');

class ArticleController {
  async getArticleList(ctx) {
    const params = ctx.request.body;
    const result = await articleModel.getArticleList(params);
    ctx.body = result;
  }

  async addArticle(ctx) {
    const params = ctx.request.body;
    const result = await articleModel.addArticle(params);
    if (result.affectedRows > 0) {
      ctx.body = { insertId: result.insertId };
    } else {
      ctx.throw(500, '创建文章失败');
    }
  }

  async editArticle(ctx) {
    const result = await articleModel.editArticle(ctx);
    ctx.body = result;
  }

  async deleteArticle(ctx) {
    const result = await articleModel.deleteArticle(ctx);
    ctx.body = result;
  }
}

module.exports = new ArticleController();
