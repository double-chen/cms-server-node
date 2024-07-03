const path = require('path');

function config() {
  const envs = {
    development: '.env.dev',
    pre: '.env.pre',
    production: '.env',
  };
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  console.log('process.cwd()', process.cwd());
  require('dotenv').config({
    path: path.resolve(process.cwd(), envs[process.env.NODE_ENV]),
  });
}

module.exports = {
  config,
};
