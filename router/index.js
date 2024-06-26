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

  return router.routes();
}

module.exports = getRouter;
