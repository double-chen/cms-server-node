const jwt = require('jsonwebtoken');
const config = require('../config');

async function authenticate(ctx, next) {
  const token = ctx.headers['x-access-token'];

  if (token) {
    try {
      const user = jwt.verify(token, config.SECRET_KEY);
      ctx.state.user = user;
      await next();
    } catch (err) {
      ctx.status = 403;
      ctx.body = { message: 'Forbidden' };
    }
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
