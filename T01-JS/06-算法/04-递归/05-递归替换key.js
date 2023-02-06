/**
 * 实现key值替换
 * @param {*} obj 
 * @param {*} params  设置替换的key值, {'schoolList::ip': 'IP'}表示将schoolList属性下的ip地址替换成IP, ::表示分隔符
 * @param {*} prexKey 
 * @returns 
 */
function replaceKeyByObj(obj, params, prexKey = '') {
  const separator = '::';
  const res = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (Array.isArray(value)) {
      res[key] = value.map(item => replaceKeyByObj(item, params, prexKey + key + separator));
    } else if (typeof value === 'object') {
      res[key] = replaceKeyByObj(value, params, prexKey + key + separator);
    } else {
      if (Object.keys(params).includes(prexKey + key)) {
        res[params[prexKey + key]] = value;
      } else {
        res[key] = value;
      }
    }
  });
  return res;
};

function replaceKey(data, params) {
  data = data || {};
  if (Array.isArray(data)) {
    return data.map(item => replaceKeyByObj(item, params));
  } else {
    return replaceKeyByObj(data, params);
  }
}

const stu = {
  name: '张三',
  age: 23,
  pc: 'window',
  schoolList: [
    {
      name: '河南理工大学',
      ip: '127.0.0.1'
    }
  ],
  company: {
    ip: '127.0.0.2',
    name: '万里红科技公司',
    haha: {
      ip: 'aaa'
    }
  }
};

const res = replaceKey(null, {
  'pc': 'PC',
  'schoolList::ip': 'IP',
  'company::haha::ip': 'IP',
  'company::ip': 'IP',
});

console.log(res);