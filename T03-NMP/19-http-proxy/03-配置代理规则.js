const http = require('http');
const httpProxy = require('http-proxy');
const HttpProxyRules = require('http-proxy-rules');

// 配置代理规则
const proxyRules = new HttpProxyRules({
  rules: {
    '/server1': 'http://localhost:3001',
    '/server2': 'http://localhost:3002'
  },
  default: 'http://localhost:3001'
});

// 创建代理服务
const proxy = httpProxy.createProxy();
http.createServer(function (req, res) {
  proxy.web(req, res, { target: proxyRules.match(req) });
}).listen(3000);

// 创建目标服务
http.createServer((req, res) => res.end('Hello 3001')).listen(3001);
http.createServer((req, res) => res.end('Hello 3002')).listen(3002);