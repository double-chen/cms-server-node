module.exports = {
  apps: [
    {
      name: 'cms-server-node',
      script: './app.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
