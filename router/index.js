const KoaRouter = require('@koa/router');
const { prefix } = require('../config');
const authController = require('../controller/authController');
const articleController = require('../controller/articleController');
const categoryController = require('../controller/categoryController');
const fileController = require('../controller/fileController');
const tagController = require('../controller/tagController');
const userController = require('../controller/userController');

function getRouter() {
  const router = new KoaRouter({ prefix });

  // 权限相关
  router.get('/menu/list', authController.getMenuList);
  router.get('/auth/buttons', authController.getAuthButtons);

  // 用户相关
  router.post('/login', userController.login);
  router.post('/logout', userController.logout);
  router.get('/user/gender', userController.getUserGender);
  router.get('/user/status', userController.getUserStatus);
  router.get('/user/department', userController.getUserDepartment);
  router.post('/user/list', userController.getUserList);
  router.post('/user/rest_password', userController.resetUserPassword);
  router.post('/user/delete', userController.deleteUser);
  router.post('/user/add', userController.addUser);
  router.post('/user/edit', userController.editUser);
  router.post('/user/export', userController.exportUser);
  router.post('/user/import', userController.importUser);
  router.get('/user/role', userController.getRoleList);
  router.get('/user/tree/list', userController.getUserTreeList);
  router.post('/user/change', userController.changeUser);

  // 文件相关
  router.post('/file/upload/img', fileController.uploadImg);
  router.post('/file/upload/video', fileController.uploadVideo);

  // 文章相关
  router.post('/article/list', articleController.getArticleList);
  router.post('/article/add', articleController.addArticle);
  router.post('/article/edit', articleController.editArticle);
  router.post('/article/delete', articleController.deleteArticle);

  // 文章分类
  router.post('/category/list', categoryController.getCategoryList);
  router.post('/category/add', categoryController.addCategory);
  router.post('/category/edit', categoryController.editCategory);
  router.post('/category/delete', categoryController.deleteCategory);

  // 文章标签
  router.post('/tag/list', tagController.getTagList);
  router.post('/tag/add', tagController.addTag);
  router.post('/tag/edit', tagController.editTag);
  router.post('/tag/delete', tagController.deleteTag);

  return router.routes();
}

module.exports = getRouter;
