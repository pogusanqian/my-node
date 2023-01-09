const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "f_id"
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "f_name"
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "f_age"
    },
    sex: {
      type: DataTypes.ENUM('未知', '男', '女'),
      allowNull: false,
      defaultValue: "未知",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "f_sex"
    },
    schoolId: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "f_school_id"
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "f_update_time"
    }
  };
  const options = {
    tableName: "t_student",
    comment: "",
    indexes: []
  };
  const StudentModel = sequelize.define("studentModel", attributes, options);
  return StudentModel;
};