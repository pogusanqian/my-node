module.exports = {
  //http://sailsjs.org/#!/documentation/reference/blueprint-api
  //http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.blueprints.html
  blueprints: {
    actions: true,   //自动路由，应该同时做好url监视和存取策略
    rest: false,     //根据设计可以为true
    shortcuts: false //必须false
  },

  //http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
  //http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.cors.html
  cors: {
    allRoutes: false, //关闭全路由的跨域存取
    origin: 'http://pogusanqian.com,https://pogusanqian.com', //允许存取的域名
    credentials: true, //需要cookies验证
  },

  //http://en.wikipedia.org/wiki/Cross-site_request_forgery
  //http://sailsjs.org/documentation/reference/configuration/sails-config-csrf
  csrf: true
};
