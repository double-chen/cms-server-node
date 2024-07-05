const path = require('path');

function config() {
  const envs = {
    development: '.env.dev',
    pre: '.env.pre',
    production: '.env',
  };

  require('dotenv').config({
    path: path.resolve(process.cwd(), envs[process.env.NODE_ENV]),
  });
}

module.exports = {
  config,
};
