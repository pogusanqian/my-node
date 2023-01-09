const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
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
      allowNull: false,
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
      allowNull: false,
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
    tableName: "t_province_map",
    comment: "",
    indexes: []
  };
  const TProvinceMapModel = sequelize.define("provinceMapModel", attributes, options);
  return TProvinceMapModel;
};