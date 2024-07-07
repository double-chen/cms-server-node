const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const { bodyParser } = require('@koa/bodyparser');
require('./utils/dotenv').config();

const getRouter = require('./router');
const notFound = require('./middleware/404');
const compress = require('./middleware/compress');
const responseFormatter = require('./middleware/responseFormatter');
const { rootDir } = require('./utils');

function start({ port, host } = {}) {
  const app = new Koa();
  const router = getRouter();

  app
    // .use(async (ctx, next) => {
    //   console.log(`Request received: ${ctx.method} ${ctx.url}`);
    //   await next(); // 继续处理请求
    // })
    .use(serve(rootDir)) // 提供静态文件服务
    .use(bodyParser())
    .use(
      cors({
        credentials: true,
      })
    )
    .use(notFound)
    .use(responseFormatter)
    .use(router)
    .use(compress);

  app.listen(port, host);
  console.log(`serve start at:  http://localhost:${port}\n\n`);
}

start({
  port: process.env.DEBUG_PORT,
});
