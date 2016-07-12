#!/usr/bin/env node
const app = require('./app');
const debug = require('debug')('app');

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
  debug('server started on port %s', server.address().port);
  app.set('server', server);
});
