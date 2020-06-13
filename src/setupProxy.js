const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/database-blog',
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};