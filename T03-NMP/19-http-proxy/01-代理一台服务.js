const http = require('http');
const httpProxy = require('http-proxy');

// 创建代理服务器, 使用3000端口代理3001服务
httpProxy.createProxyServer({ target: 'http://localhost:3001' }).listen(3000);

http.createServer(function (req, res) {
  res.end('Hello World');
}).listen(3001);