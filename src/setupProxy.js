const { createProxyMiddleware } = require('http-proxy-middleware');

function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000/api',
            changeOrigin: true,
        })
    );
}