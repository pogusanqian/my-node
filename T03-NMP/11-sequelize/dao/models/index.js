const { Sequelize } = require('sequelize');
const cls = require('cls-hooked');

Sequelize.useCLS(cls.createNamespace('my-namespace'));

const options = {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    timezone: '+08:00',
    logging: false,
    pool: {
        max: 30,
    },
    define: {
        timestamps: false,
    },
    // 将查询出来的国际标准时间转换成东八区时间, dateStrings, typeCast缺一不可
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
};
const localSequelize = new Sequelize('db_school', 'root', '123123', options);
const netSequelize = new Sequelize('school', 'root', '123123', options);

module.exports = {
    localSequelize,
    netSequelize,
};
