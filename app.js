const Koa = require('koa');
const cors = require('@koa/cors');
const { bodyParser } = require('@koa/bodyparser');

const getRouter = require('./router');
const notFound = require('./middleware/404');
const compress = require('./middleware/compress');

const initDotenv = require('./utils/dotenv');

const app = new Koa();
app.use(bodyParser());
const router = new Router();
