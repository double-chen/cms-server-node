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
    ctx.body = result;
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
