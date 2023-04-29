const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./sources/server.key'),
  cert: fs.readFileSync('./sources/server.crt'),
  passphrase: 'server'
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world');
});

server.listen(8000, () => console.log('https://localhost:8000, 服务启动成功'));
