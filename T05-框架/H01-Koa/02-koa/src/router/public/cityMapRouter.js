const StudentRouter = require('koa-router')();
const CityMapController = require('../../controller/CityMapController');

StudentRouter.get('/getCityMapByPage', ctx => CityMapController.getCityMapByPage(ctx));
StudentRouter.post('/deleteCityMapById', ctx => CityMapController.deleteCityMapById(ctx));
StudentRouter.post('/addCityMap', ctx => CityMapController.addCityMap(ctx));
StudentRouter.post('/updateCityMap', ctx => CityMapController.updateCityMap(ctx));

module.exports = StudentRouter;
