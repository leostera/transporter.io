var dio = require('transporter.io')
  , growl = require('transporter.io-growl');

dio.transports.push(growl);
dio.connect('ws://localhost:3000');
dio.subscribe('testEvent');