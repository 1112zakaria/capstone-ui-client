const { createProxyMiddleware } = require('http-proxy-middleware');

// FIXME: what type is this???
function(app: any) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000/api',
            changeOrigin: true,
        })
    );
}