const Koa = require('koa');
const cors = require('@koa/cors');
const { bodyParser } = require('@koa/bodyparser');
require('./utils/dotenv').config();

const getRouter = require('./router');
const notFound = require('./middleware/404');
const compress = require('./middleware/compress');

function start({ port, host } = {}) {
  const app = new Koa();
  const router = getRouter();
  app
    .use(bodyParser())
    .use(
      cors({
        credentials: true,
      })
    )
    .use(notFound)
    .use(router)
    .use(compress);

  app.listen(port, host);
  console.log(`serve start at:  http://localhost:${port}\n\n`);
}

start({
  port: process.env.DEBUG_PORT,
});
