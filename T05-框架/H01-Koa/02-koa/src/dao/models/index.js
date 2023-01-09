const { Sequelize } = require('sequelize');
const FSUtil = require('../../util/FSUtil');
const cls = require('cls-hooked');

const namespace = cls.createNamespace('clsNameSpace01');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    timezone: '+08:00',
    logging: false,
    pool: {
        max: 10,
    },
    define: {
        timestamps: false,
    },
    // 将查询出来的国际标准时间转换成东八区时间, dateStrings, typeCast缺一不可
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
});

FSUtil.getFilePathsAtDir(__dirname).filter(item => item !== __filename).forEach(item => require(item)(sequelize));
module.exports = sequelize;
