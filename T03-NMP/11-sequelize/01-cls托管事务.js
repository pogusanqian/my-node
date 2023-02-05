const { Sequelize, DataTypes } = require('sequelize');
const cls = require('cls-hooked');

// 创建命名空间
const namespace = cls.createNamespace('myCLS');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize('db_school', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+08:00',
  // logging: false,
  // 全局查询设置成raw
  query: { raw: true },
  //  禁用时间戳
  define: { timestamps: false }
});

(async () => {
  const attributes = {
    f_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键",
      field: "f_id"
    },
    f_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "名称",
      field: "f_name"
    },
    f_full_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "全名称",
      field: "f_full_name"
    },
    f_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "编码",
      field: "f_code"
    },
    f_pin_yin: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "拼音",
      field: "f_pin_yin"
    },
    f_operator: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: "修改人",
      field: "f_operator"
    },
    f_update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: "修改时间",
      field: "f_update_time"
    }
  };
  const options = {
    timestamps: false,
    tableName: "t_city_map",
    comment: "",
    indexes: [],
  };
  const CityMapModel = sequelize.define("CityMapModel", attributes, options);
  const city = {
    f_name: '全国',
    f_code: '999999',
    f_pin_yin: 'quanguo',
    f_full_name: '全国',
    f_operator: 'liuqc'
  };

  await sequelize.transaction(async () => {
    // 不用再手动传递transaction参数
    await CityMapModel.create(city);
    throw Error('=============');
    await CityMapModel.create(city);
  });

  sequelize.close();
})();