function replaceKey(obj, params) {
  const res = JSON.parse(JSON.stringify(obj));
  const pathList = Object.keys(params);
  pathList.forEach(item => {
    const finalKey = params[item];
    const keyList = item.split('::');
    let temp = res;
    for (let index = 0; index < keyList.length; index++) {
      const key = keyList[index];
      const value = temp[key];
      if (index === keyList.length - 1) {
        temp[finalKey] = value;
        delete temp[key];
      } else {
        if (Array.isArray(value)) {
          temp[key]  = value.map(item2 => replaceKey(item2, {[keyList.slice(index + 1).join('::')]: finalKey}));
          break;
        } else {
          temp = temp[key];
        }
      }
    }
  });
  return res;
};

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
    },
    list: [
      {name: 'aaa'}
    ]
  }
};

const res = replaceKey(stu, {
  'pc': 'PC',
  'schoolList': 'mySchool',
  'company::haha::ip': 'IP',
  'company::list::name': 'myname',
});

console.log(res);