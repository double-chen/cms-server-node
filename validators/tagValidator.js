const Joi = require('joi');

// 定义 Tag 对象基础的验证规则
const baseTagSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '名称不能为空',
    'any.required': '名称是必填项',
  }),
});

// 添加 Tag 数据的验证规则（直接使用基础规则）
const addTagSchema = baseTagSchema;

// 修改 Tag 数据的验证规则（包含 id 并且 id 是必填项）
const updateTagSchema = baseTagSchema.keys({
  id: Joi.string().required().messages({
    'string.empty': 'ID不能为空',
    'any.required': 'ID是必填项',
  }),
});

// 通用的 ID 验证规则（用于删除和通过 ID 获取 Tag）
const idTagSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'ID不能为空',
    'any.required': 'ID是必填项',
  }),
});

// 验证添加 Tag 数据
const validateCreateTag = (data) => {
  return addTagSchema.validate(data);
};

// 验证修改 Tag 数据
const validateUpdateTag = (data) => {
  return updateTagSchema.validate(data);
};

// 验证 ID （用于删除和通过 ID 获取 Tag）
const validateIdTag = (data) => {
  return idTagSchema.validate(data);
};

module.exports = {
  validateCreateTag,
  validateUpdateTag,
  validateIdTag,
};
