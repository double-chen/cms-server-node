const articleModel = require('../model/articleModel');

class ArticleController {
  async getArticleList(ctx) {
    return articleModel.getArticleList(ctx);
  }

  async addArticle(ctx) {
    return articleModel.addArticle(ctx);
  }

  async editArticle(ctx) {
    return articleModel.editArticle(ctx);
  }

  async deleteArticle(ctx) {
    return articleModel.deleteArticle(ctx);
  }
}

module.exports = new ArticleController();
