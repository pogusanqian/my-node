const dayjs = require("dayjs");

// console.log(dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss"));
// console.log(dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"));
// console.log(dayjs("2023-03-15 17:21:30").format("YYYY-MM-DD HH:mm:ss"));

// console.log(dayjs("2023-03-15 17:21:30").unix()); // 10位数, 以秒为单位的时间戳
// console.log(dayjs("2023-03-15 17:21:30").valueOf()); // 毫秒时间戳

// console.log(dayjs(1678809600000).format("YYYY-MM-DD HH:mm:ss"));
// console.log(dayjs(1678869215000).format("YYYY-MM-DD HH:mm:ss"));
// console.log(dayjs(1678809600000).format("YYYY-MM-DD HH:mm:ss"));

// console.log(String(dayjs().unix()).length)
// console.log(String(Date.now()).length)

// 时间戳转换
// console.log(dayjs().unix())
console.log(dayjs(1682844688 * 1000).format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs.unix(1682870400).format("YYYY-MM-DD HH:mm:ss"));



