const CityMapDao = require('../dao/CityMapDao');

class CityMapController {

  static async getCityMapByPage(ctx) {
    const { current, pageSize } = ctx.query;
    const cityMap = {
      offset: (Number(current) - 1) * Number(pageSize) || 0,
      limit: Number(pageSize) || 10,
    };
    ctx.body = await CityMapDao.findAndCountAll(cityMap);
  }

  static async deleteCityMapById(ctx) {
    ctx.body = await CityMapDao.deleteById(ctx.request.body.f_id);
  }

  static async addCityMap(ctx) {
    ctx.body = await CityMapDao.create(ctx.request.body);
  }

  static async updateCityMap(ctx) {
    delete ctx.request.body.f_update_time;
    ctx.body = await CityMapDao.update(ctx.request.body);
  }

}

module.exports = CityMapController;
