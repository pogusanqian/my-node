const { Sequelize, DataTypes } = require('sequelize');
const cls = require('cls-hooked');

// 创建命名空间
const namespace = cls.createNamespace('myCLS');
Sequelize.useCLS(namespace);
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'D:/Tools/SQLite/database/db_school.sqlite',
  logging: false,
  pool: {
    min: 1,
    max: 10
  },
  define: { timestamps: false },
  query: { raw: true }
});

(async () => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      unique: false,
      field: "id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      unique: false,
      field: "name",
      autoIncrement: false
    },
    fullName: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      unique: false,
      field: "full_name",
      autoIncrement: false
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      unique: false,
      field: "code",
      autoIncrement: false
    },
    pinYin: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      unique: false,
      field: "pin_yin",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "city",
    comment: "",
    indexes: []
  };
  const CityModel = sequelize.define("cityModel", attributes, options);
  const city = {
    name: '全国',
    code: '999999',
    pinYin: 'quanguo',
    fullName: '全国'
  };

  await sequelize.transaction(async () => {
    console.log(await CityModel.findOne({where: {id: 1}}));
    // // 不用再手动传递transaction参数
    await CityModel.create(city);
    throw Error('=============');
    await CityModel.create(city);
  });
  
  sequelize.close();
})();