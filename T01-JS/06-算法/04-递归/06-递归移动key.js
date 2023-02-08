function moveKey(data, params) {
  const res = JSON.parse(JSON.stringify(data));
  Object.keys(params).forEach(paramKey => {
    const paramValue = params[paramKey];
    const oldKeyList = paramKey.split('::');
    if (typeof paramValue === 'object') { // 数组元素
      oldKeyList.reduce((prev, key, index) => {
        key = key.replace('@', '');
        if (index === oldKeyList.length - 1) {
          prev[key] = prev[key].map(item => moveKey(item, paramValue));
        } else {
          return prev[key];
        }
      }, res);
    } else {
      const newKeyList = paramValue.split('::');
      let newValue = null;
      // 递归获取值
      oldKeyList.reduce((prev, key, index) => {
        if (index === oldKeyList.length - 1) { // 获取最后一层的值
          newValue = prev[key];
          delete prev[key];
        } else {
          return prev[key];
        }
      }, res);
      // 递归设置值
      newKeyList.reduce((prev, key, index) => {
        if (index === newKeyList.length - 1) {
          prev[key] = newValue;
        } else {
          // 这里不能直接返回, 因为空对象需要挂在到prev中, 此时空对象就挂载到了prev对象上了
          prev[key] = typeof prev[key] === 'object' ? prev[key] : {};
          return prev[key];
        }
      }, res);
    }
  });
  return res;
}


const data = {
  root: {
    stu: {
      name: '张三',
      age: 23,
      school:{
        name: '河南理工大学',
        address: '焦作市'
      }
    }
  }
}

const res = moveKey(data, {
  'root::stu::school::address': 'root::stu::schoolAddress'
});

console.log(res);
