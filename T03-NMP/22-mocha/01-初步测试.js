const assert = require('assert');
const axios = require('axios');

describe('用户', () => {
  it('积分添加20', async () => {
    // 定义请求参数
    const req = { userId: 1001 };
    // 获取之前用户信息
    const { data: oldUser } = await axios.post('http://localhost:3000/mykoa/user', req);
    // 进行积分添加20操作
    await axios.get('http://localhost:3000/mykoa/addScore', req);
    // 获取最新用户信息
    const { data: newUser } = await axios.post('http://localhost:3000/mykoa/user', req);
    // 单元测试
    assert.equal(newUser.score - oldUser.score, 20);
  });
});