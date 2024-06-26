const articleModel = require('../model/articleModel');

class ArticleController {
  async getArticleList(ctx) {
    const result = await articleModel.getArticleList(ctx);
    ctx.body = result;
  }

  async addArticle(ctx) {
    const result = await articleModel.addArticle(ctx);
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
