var dio = require('dispatcher.io')
  , growl = require('dispatcher.io-growl');

dio.transports.push(growl);
dio.connect('ws://localhost:3000');
dio.subscribe('testEvent');