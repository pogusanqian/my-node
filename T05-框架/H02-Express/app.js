const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.all('/', function (req, res) {
  res.send(req.body);
});

app.listen(3000, () => console.log('http://localhost:3000 启动成功'));