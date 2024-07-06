const Joi = require('joi');

// 定义基础的验证规则
const baseSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '名称不能为空',
    'any.required': '名称是必填项',
  }),
  parentId: Joi.string().allow(null).messages({
    'string.empty': '父级ID不能为空',
  }),
});

// 添加数据的验证规则（直接使用基础规则）
const addSchema = baseSchema;

// 修改数据的验证规则（包含 id 并且 id 是必填项）
const updateSchema = baseSchema.keys({
  id: Joi.string().required().messages({
    'string.empty': 'ID不能为空',
    'any.required': 'ID是必填项',
  }),
});

// 通用的 ID 验证规则（用于删除和通过 ID 获取分类）
const idSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'ID不能为空',
    'any.required': 'ID是必填项',
  }),
});

const validateCreateCategory = (data) => {
  return addSchema.validate(data);
};

const validateUpdateCategory = (data) => {
  return updateSchema.validate(data);
};

const validateIdCategory = (data) => {
  return idSchema.validate(data);
};

module.exports = {
  validateCreateCategory,
  validateUpdateCategory,
  validateIdCategory,
};
