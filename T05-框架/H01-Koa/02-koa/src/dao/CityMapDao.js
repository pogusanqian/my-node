const sequelize = require('./models');
const { cityMapModel } = sequelize.models;

class CityMapDao {

  static async findAndCountAll(cityMap) {
    return await cityMapModel.findAndCountAll({
      offset: cityMap.offset,
      limit: cityMap.limit,
    });
  }

  static async deleteById(id) {
    return await cityMapModel.destroy({ where: { f_id: id } });
  }

  static async create(cityMap) {
    return await cityMapModel.create(cityMap);
  }

  static async update(cityMap) {
    return await cityMapModel.update(cityMap, { where: { f_id: cityMap.f_id } });
  }
}

module.exports = CityMapDao;
