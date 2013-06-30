var dio = require('dispatcher.io')
  , exec = require('dispatcher.io-exec');

dio.transports.push(exec);
dio.connect('ws://localhost:3000');
dio.subscribe('testEvent');