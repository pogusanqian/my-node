const { BloomFilter } = require('bloom-filters');

// 第一个参数表示数据的位数, 第二个参数表示hasn运算次数, 运算次数越大, 则误差率越低, 而且性能越低
const filter = new BloomFilter(10, 10);

// 添加数据
filter.add('alice');
filter.add('bob');

// 查询数据
console.log(filter.has('bob'));
console.log(filter.has('张三'));

// 获取误报率信息
console.log(filter.rate());


// 第二种创建过滤器的方式
const items = ['alice', 'bob'];
const errorRate = 0.04;
const filter2 = BloomFilter.create(items.length, errorRate);


// 第三种创建过滤器方式
const filter3 = BloomFilter.from(items, errorRate);