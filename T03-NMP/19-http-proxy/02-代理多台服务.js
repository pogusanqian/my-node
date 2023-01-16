const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
http.createServer(function (req, res) {
  if (req.url == '/server1') {
    proxy.web(req, res, { target: 'http://localhost:3001' });
  } else {
    proxy.web(req, res, { target: 'http://localhost:3002' });
  }
}).listen(3000);

http.createServer((req, res) => res.end('Hello 3001')).listen(3001);
http.createServer((req, res) => res.end('Hello 3002')).listen(3002);