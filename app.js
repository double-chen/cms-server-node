const Koa = require('koa');
const cors = require('@koa/cors');
const { bodyParser } = require('@koa/bodyparser');
require('./utils/dotenv').config();

const getRouter = require('./router');
const notFound = require('./middleware/404');
const compress = require('./middleware/compress');
const responseFormatter = require('./middleware/responseFormatter');

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
    .use(responseFormatter)
    .use(router)
    .use(compress);

  app.listen(port, host);
  console.log(`serve start at:  http://localhost:${port}\n\n`);
}

start({
  port: process.env.DEBUG_PORT,
});
