/**
 * utility to dynamically create server routes by the route filename
 * 
 */
const debug = require('debug')('app');
const fs = require('fs');
const path = require('path');

exports.load = function (app, routesDir) {
  const routes = fs.readdirSync(routesDir);

  routes.forEach(function (filename) {
    const modulePath = path.join(routesDir, filename);
    const name = path.basename(modulePath, '.js');
    const ext = path.extname(modulePath);
    const route = name === 'root' ? '/' : '/' + name;
    let routerModule;

    if (ext === '.js') {
      routerModule = require(modulePath);
      app.use(route, routerModule);
    }
  });
};
