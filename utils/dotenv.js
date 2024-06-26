const path = require('path');

function initDotenv() {
  const envs = {
    development: '.env.dev',
    pre: '.env.pre',
    production: '.env',
  };
  require('dotenv').config({
    path: path.resolve(process.cwd(), envs[process.env.NODE_ENV]),
  });
}

module.exports = initDotenv;
