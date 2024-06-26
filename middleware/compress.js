const koaCompress = require('koa-compress');

const compress = koaCompress({
  threshold: 2048,
  filter(contentType) {
    return ['application/javascript', 'application/json', 'text/css'].includes(
      contentType
    );
  },
  gzip: {
    flush: require('zlib').constants.Z_SYNC_FLUSH,
  },
  deflate: {
    flush: require('zlib').constants.Z_SYNC_FLUSH,
  },
  br: false,
});

module.exports = compress;
