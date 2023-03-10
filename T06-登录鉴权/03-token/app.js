const Koa = require('koa');
const Router = require('koa-router');
const { koaBody } = require('koa-body');
const crypto = require('crypto');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const app = new Koa();
const router = new Router();
app.keys = ['myKey'];

const key = '123456789abcdefg';
const iv = 'abcdefg123456789';
const algorithm = 'aes-128-cbc';
const tokenSalt = 'tokenSalt';
const randomKeys = {};
const users = [
  { id: 1001, name: 'root', password: cipher('root'), role: 'root' },
  { id: 1002, name: 'admin', password: cipher('admin'), role: 'admin' },
];

// 加密数据库数据
function cipher(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const cipherText = cipher.update(text, 'utf8', 'hex');
  return cipherText + cipher.final('hex');
}

// 解密数据库数据
function decipher(text) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const decipherText = decipher.update(text, 'hex', 'utf8');
  return decipherText + decipher.final('utf8');
}

// 认证拦截器
async function authHandler(ctx, next) {
  const witeList = ['/login', '/getpublickey'];
  if (witeList.includes(ctx.path)) {
    await next();
  } else {
    try {
      const playload = jwt.verify(ctx.header.token, tokenSalt);
      ctx.content = Object.assign(ctx.content || {}, playload);
      await next();
    } catch (err) {
      console.error(err);
      ctx.body = { code: -1001, mes: '鉴权失败, 跳转到登录页面' };
    }
  }
}

// 异常拦截器
async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.body = {
      code: -1,
      msg: '请求失败'
    };
  }
}

// 成功响应中间件
async function successResponseHandle(ctx, next) {
  await next();
  if (ctx.body && !Object.hasOwn(ctx.body, 'code')) {
    ctx.body = {
      code: 0,
      msg: '请求成功',
      data: ctx.body,
    };
  }
}

// 登录
router.post('/login', (ctx, next) => {
  // 获取请求参数, 需要使用私钥解密数据
  let { name, password } = ctx.request.body;
  const privateKey = {
    key: randomKeys[ctx.query.keyUUID],
    padding: crypto.constants.RSA_PKCS1_PADDING
  };
  password = crypto.privateDecrypt(privateKey, Buffer.from(password, 'base64')).toString();
  // 登录成功下发token
  const user = users.find(item => item.name === name && decipher(item.password) === password);
  if (user) {
    const token = jwt.sign({ userid: user.id, role: user.role }, tokenSalt, { expiresIn: 60 * 60 * 24 * 7 });
    ctx.set('token', token);
    ctx.body = '登录成功, 请跳转到首页';
  } else {
    ctx.body = { code: -1, msg: '账户密码不对, 请重新登录' };
  }
  next();
});

// 提供给前端随机公钥, 用来加密登录密码等敏感信息
router.get('/getpublickey', (ctx, next) => {
  // 生成公私钥
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });
  // 设置私钥, 并设置30s失效性
  const keyUUID = uuid.v4();
  randomKeys[keyUUID] = privateKey;
  setTimeout(() => delete randomKeys[keyUUID], 1000 * 30);
  // 返回给前端公钥和服务器私钥对应的id
  ctx.body = { publicKey, keyUUID };
});

// 获取数据
router.get('/getusers', (ctx, next) => {
  ctx.body = users;
});

// 使用组件
app.use(errorHandler);
app.use(authHandler);
app.use(koaBody({ multipart: true }));
app.use(successResponseHandle);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('http://localhost:3000'));
