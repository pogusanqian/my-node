function keyMustList(obj, params) {
  const res = JSON.parse(JSON.stringify(obj));
  params.forEach(item => {
    const keyList = item.split('::');
    let temp = res;
    for (let index = 0; index < keyList.length; index++) {
      const key = keyList[index];
      const value = temp[key];
      if (index === keyList.length - 1) { // 最后一层
         temp[key]=  Array.isArray(value) ? value : [value];
      } else {
        if (Array.isArray(value)) {
          temp[key]= value.map(item2 => keyMustList(item2, [keyList.slice(index + 1).join('::')]));
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
  schoolList: {
    schoolInfo: [
      {
        name: '河南理工大学',
        ip: '127.0.0.1',
        processList: {
          processInfo: {
            pid: 100
          }
        }
      },
    ]
  },
  firend: {
    name: '李四'
  }
};

const res = keyMustList(stu, [
  'name',
  'firend::name',
  'schoolList::schoolInfo::processList::processInfo'
]);

console.log(res);