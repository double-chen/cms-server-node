const jwt = require('jsonwebtoken');
const config = require('../config');

async function authenticate(ctx, next) {
  if (config.useMock) {
    await next();
    return;
  }

  const token = ctx.headers['x-access-token'];

  if (token) {
    const user = jwt.verify(token, config.SECRET_KEY);
    ctx.state.user = user;
    await next();
  } else {
    ctx.status = 401;
    ctx.body = { message: 'Unauthorized' };
  }
}

// 受保护的路由
// router.get('/protected', authenticate, async (ctx) => {
//     ctx.body = { message: 'You have access to this protected route', user: ctx.state.user };
//   });

module.exports = authenticate;
