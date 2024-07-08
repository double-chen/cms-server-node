const articleModel = require('../model/articleModel');
const {
  validateCreateArticle,
  validateUpdateArticle,
  validateDeleteArticle,
} = require('../validators/articleValidator');

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

    const { error } = validateCreateArticle(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await articleModel.addArticle(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, { message: '创建文章失败' });
    }
  }

  async editArticle(ctx) {
    const params = ctx.request.body;

    const { error } = validateUpdateArticle(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await articleModel.editArticle(params);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, { message: '编辑文章失败' });
    }
  }

  async deleteArticle(ctx) {
    const params = ctx.request.body;

    const { error } = validateDeleteArticle(params);

    if (error) {
      ctx.throw(400, { message: error.details[0].message });
      return;
    }

    const result = await articleModel.deleteArticle(params.ids);
    if (result > 0) {
      ctx.body = true;
    } else {
      ctx.throw(500, { message: '删除文章失败' });
    }
  }
}

module.exports = new ArticleController();
