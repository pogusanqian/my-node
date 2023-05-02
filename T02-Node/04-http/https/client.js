const axios = require('axios');

// 允许信任服务端的自签名证书
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
axios.get('https://localhost:8000').then((data) => console.log('===========', data.data));
