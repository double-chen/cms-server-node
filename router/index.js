const KoaRouter = require('@koa/router');
const { prefix } = require('../config');
const authController = require('../controller/authController');
const articleController = require('../controller/articleController');
const categoryController = require('../controller/categoryController');
const fileController = require('../controller/fileController');
const tagController = require('../controller/tagController');
const userController = require('../controller/userController');

const authenticate = require('../middleware/authenticate');

function getRouter() {
  const router = new KoaRouter({ prefix });

  // 权限相关
  router.get('/menu/list', authenticate, authController.getMenuList);
  router.get('/auth/buttons', authenticate, authController.getAuthButtons);

  // 用户相关
  router.post('/login', userController.login);
  router.post('/logout', userController.logout);
  router.get('/user/gender', authenticate, userController.getUserGender);
  router.get('/user/status', authenticate, userController.getUserStatus);
  router.get(
    '/user/department',
    authenticate,
    userController.getUserDepartment
  );
  router.post('/user/list', authenticate, userController.getUserList);
  router.post(
    '/user/rest_password',
    authenticate,
    userController.resetUserPassword
  );
  router.post('/user/delete', authenticate, userController.deleteUser);
  router.post('/user/add', authenticate, userController.addUser);
  router.post('/user/edit', authenticate, userController.editUser);
  router.post('/user/export', authenticate, userController.exportUser);
  router.post(
    '/user/import',
    authenticate,
    fileController.uploadFile,
    userController.importUser
  );
  router.get('/user/role', authenticate, userController.getRoleList);
  router.get('/user/tree/list', authenticate, userController.getUserTreeList);
  router.post('/user/change', authenticate, userController.changeUser);

  // 文章相关
  router.post('/article/list', authenticate, articleController.getArticleList);
  router.get('/article/detail', authenticate, articleController.getArticleById);
  router.post('/article/add', authenticate, articleController.addArticle);
  router.post('/article/edit', authenticate, articleController.editArticle);
  router.post('/article/delete', authenticate, articleController.deleteArticle);

  // 文章分类
  router.post(
    '/category/list',
    authenticate,
    categoryController.getCategoryList
  );
  router.get(
    '/category/detail',
    authenticate,
    categoryController.getCategoryById
  );
  router.post('/category/add', authenticate, categoryController.addCategory);
  router.post('/category/edit', authenticate, categoryController.editCategory);
  router.post(
    '/category/delete',
    authenticate,
    categoryController.deleteCategory
  );

  // 文章标签
  router.post('/tag/list', authenticate, tagController.getTagList);
  router.get('/tag/detail', authenticate, tagController.getTagById);
  router.post('/tag/add', authenticate, tagController.addTag);
  router.post('/tag/edit', authenticate, tagController.editTag);
  router.post('/tag/delete', authenticate, tagController.deleteTag);

  // 文件相关
  router.post('/file/upload/img', fileController.uploadImg);
  router.post('/file/upload/video', fileController.uploadVideo);
  router.post(
    '/file/uploadFile',
    fileController.uploadFile,
    fileController.uploadFileCallback
  );

  return router.routes();
}

module.exports = getRouter;
