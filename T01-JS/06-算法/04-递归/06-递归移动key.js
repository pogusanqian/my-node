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
          prev = prev[key];
          return prev;
        }
      }, res);
    } else {
      const newKeyList = paramValue.split('::');
      let newValue = null;
      oldKeyList.reduce((prev, key, index) => {
        if (index === oldKeyList.length - 1) { // 获取最后一层的值
          newValue = prev[key];
          delete prev[key];
        } else { // 递归到最后一层
          prev = prev[key];
          return prev;
        }
      }, res);
      newKeyList.reduce((prev, key, index) => {
        if (index === newKeyList.length - 1) { // 获取最后一层的值
          prev[key] = newValue ;
        } else { // 递归到最后一层
          prev[key] = {};
          return prev[key];
        }
      }, res);
    }
  });
  return res;
}

const stu = {
  name: '张三',
  schoolList: {
    schoolInfo: [
      {
        name: '河南理工大学',
        address: '焦作市',
        processList: {
          processInfo: [{
            pid: 100
          }]
        }
      }
    ]
  },
  USBList: [
    { pid: 1001 }
  ],
  AList: {
    AInfo: {
      pid: 1001
    }
  },
  address: {
    cityCode: '110000',
    cityName: 'hahaha'
  }
};

const res = moveKey(stu, {
  '@schoolList::schoolInfo': { // 移动数组对象中元素, 数组的填写需要放在最前面, 并且需要以@开头
    'processList::processInfo': 'processList'
  },
  // 移动对象上的属性
  'schoolList::schoolInfo': 'schoolList',
  'USBList': 'USBList::processInfo',
});

console.log(res);