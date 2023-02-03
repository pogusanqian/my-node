const data = [
  {
    'dept_id': 1,
    'dept_name': '中央研究院',
    'parent_id': '0'
  },
  {
    'dept_id': 2,
    'dept_name': '人力资源中心',
    'parent_id': '0'
  },
  {
    'dept_id': 3,
    'dept_name': '财务管理中心',
    'parent_id': '0'
  },
  {
    'dept_id': 4,
    'dept_name': '商务运营中心',
    'parent_id': '0'
  },
  {
    'dept_id': 5,
    'dept_name': '管理层',
    'parent_id': '0-1'
  },
  {
    'dept_id': 6,
    'dept_name': '大数据研发中心',
    'parent_id': '0-1'
  },
  {
    'dept_id': 7,
    'dept_name': '综合管理部',
    'parent_id': '0-1'
  },
  {
    'dept_id': 8,
    'dept_name': '安全保密研发中心',
    'parent_id': '0-1'
  },
  {
    'dept_id': 9,
    'dept_name': '财务管理部',
    'parent_id': '0-2'
  },
  {
    'dept_id': 10,
    'dept_name': '会计核算部',
    'parent_id': '0-2'
  },
  {
    'dept_id': 11,
    'dept_name': '研发一部',
    'parent_id': '0-1-8'
  },
  {
    'dept_id': 12,
    'dept_name': '研发二部',
    'parent_id': '0-1-8'
  },
  {
    'dept_id': 13,
    'dept_name': '研发五部',
    'parent_id': '0-11'
  }
];

// 采用递归往里面写数据
function getChild(data, prex) {
  const childrens = data.filter(item => item.parent_id === prex);
  childrens.forEach(item => {
    const bigPrex = prex.concat('-', item.dept_id);
    const smallData = data.filter(item2 => item2.parent_id.startsWith(bigPrex));
    item.childrens = getChild(smallData, bigPrex);
  });
  return childrens;
}

const res = getChild(data, '0');
console.log(res);
