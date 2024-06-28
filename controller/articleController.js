const articleModel = require('../model/articleModel');

class ArticleController {
  async getArticleList(ctx) {
    const params = ctx.request.body;
    const result = await articleModel.getArticleList(params);
    ctx.body = result;
  }

  async getArticleById(ctx) {
    const params = ctx.query;
    const result = await articleModel.getArticleById(params.id);
    ctx.body = result;
  }

  async addArticle(ctx) {
    const params = ctx.request.body;
    const result = await articleModel.addArticle(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '创建文章失败');
    }
  }

  async editArticle(ctx) {
    const params = ctx.request.body;
    const result = await articleModel.editArticle(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '编辑文章失败');
    }
  }

  async deleteArticle(ctx) {
    const params = ctx.request.body;
    const result = await articleModel.deleteArticle(params.id);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, '删除文章失败');
    }
  }
}

module.exports = new ArticleController();
