const Joi = require('joi');

// 定义基础的文章验证规则
const baseArticleSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': '标题不能为空',
    'any.required': '标题是必填项',
  }),
  content: Joi.string().required().messages({
    'string.empty': '内容不能为空',
    'any.required': '内容是必填项',
  }),
  summary: Joi.string().required().messages({
    'string.empty': '摘要不能为空',
    'any.required': '摘要是必填项',
  }),
  categoryId: Joi.string().required().messages({
    'string.empty': '分类ID不能为空',
    'any.required': '分类ID是必填项',
  }),
  tagIds: Joi.array().items(Joi.string()).required().messages({
    'array.base': '标签ID必须是一个数组',
    'any.required': '标签ID是必填项',
  }),
  thumbnail: Joi.string().uri().optional().allow('').messages({
    'string.uri': '缩略图URL格式不正确',
  }),
  isPublish: Joi.boolean().required().messages({
    'boolean.base': '发布状态必须是布尔值',
    'any.required': '发布状态是必填项',
  }),
  createTime: Joi.optional(),
  updateTime: Joi.optional(),
});

// 新增文章的验证规则（直接使用基础规则）
const createArticleSchema = baseArticleSchema;

// 更新文章的验证规则（包含 articleId 并且 articleId 是必填项）
const updateArticleSchema = baseArticleSchema.keys({
  id: Joi.string().required().messages({
    'string.empty': '文章ID不能为空',
    'any.required': '文章ID是必填项',
  }),
});

// 删除文章的验证规则（只验证 articleId）
const deleteArticleSchema = Joi.object({
  ids: Joi.array().items(Joi.string().required()).required(),
});

const validateCreateArticle = (data) => {
  return createArticleSchema.validate(data);
};

const validateUpdateArticle = (data) => {
  return updateArticleSchema.validate(data);
};

const validateDeleteArticle = (data) => {
  return deleteArticleSchema.validate(data);
};

module.exports = {
  validateCreateArticle,
  validateUpdateArticle,
  validateDeleteArticle,
};
