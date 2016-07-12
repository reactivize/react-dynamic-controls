const app = require('express')();
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const routeloader = require('./lib/routeloader');
const routesDir = path.join(__dirname, 'routes');

module.exports = app;

app.use(morgan('dev'));
app.use(bodyParser.json());

routeloader.load(app, routesDir);

