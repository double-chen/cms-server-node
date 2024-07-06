const Joi = require('joi');

const baseUserSchema = Joi.object({
  username: Joi.string().min(1).max(30).required().messages({
    'string.base': '用户名应该是一个字符串',
    'string.empty': '用户名不能为空',
    'string.min': '用户名长度至少为 1 个字符',
    'string.max': '用户名长度不能超过 30 个字符',
    'any.required': '用户名是必填项',
  }),
  gender: Joi.string().valid('男', '女', '其他').required().messages({
    'any.only': '性别必须是 "男", "女" 或 "其他"',
    'any.required': '性别是必填项',
  }),
  age: Joi.number().integer().min(0).max(120).required().messages({
    'number.base': '年龄必须是一个数字',
    'number.integer': '年龄必须是一个整数',
    'number.min': '年龄不能小于 0',
    'number.max': '年龄不能大于 120',
    'any.required': '年龄是必填项',
  }),
  idCard: Joi.string()
    .pattern(/^[0-9]{15}$|^[0-9]{18}$|^[0-9]{17}[Xx]$/)
    .required()
    .messages({
      'string.pattern.base': '身份证号码格式不正确',
      'any.required': '身份证号码是必填项',
    }),
  email: Joi.string().email().required().messages({
    'string.email': '电子邮件格式不正确',
    'any.required': '电子邮件是必填项',
  }),
  address: Joi.string().max(100).optional().messages({
    'string.max': '地址长度不能超过 100 个字符',
  }),
  status: Joi.string().valid('启用', '停用').required().messages({
    'any.only': '状态必须是 "启用" 或 "停用"',
    'any.required': '状态是必填项',
  }),
  avatar: Joi.string().uri().optional().messages({
    'string.uri': '头像必须是一个有效的 URI',
  }),
  roleId: Joi.number().integer().required().messages({
    'number.base': '角色 ID 必须是一个数字',
    'number.integer': '角色 ID 必须是一个整数',
    'any.required': '角色 ID 是必填项',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': '密码应该是一个字符串',
    'string.empty': '密码不能为空',
    'string.min': '密码长度至少为 6 个字符',
    'any.required': '密码是必填项',
  }),
});

// 新增用户时的验证规则（不包含 userId）
const createUserSchema = baseUserSchema;

// 更新用户时的验证规则（包含 userId 并且 userId 是必填项）
const updateUserSchema = baseUserSchema.keys({
  userId: Joi.number().integer().required(),
});

// 删除用户时的验证规则（只验证 userId）
const deleteUserSchema = Joi.object({
  userId: Joi.number().integer().required(),
});

const validateCreateUser = (data) => {
  return createUserSchema.validate(data);
};

const validateUpdateUser = (data) => {
  return updateUserSchema.validate(data);
};

const validateDeleteUser = (data) => {
  return deleteUserSchema.validate(data);
};

module.exports = { validateCreateUser, validateUpdateUser, validateDeleteUser };
