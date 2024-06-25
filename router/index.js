const KoaRouter = require('@koa/router');
const { prefix } = require('../utils');
const clientController = require('../controller/authController');

function getRouter() {
  const router = new KoaRouter({ prefix });

  router.get('/menu/list', authController.getMenuList);

  return router.routes();
}

module.exports = getRouter;
