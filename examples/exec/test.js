var dio = require('transporter.io')
  , exec = require('transporter.io-exec');

dio.transports.push(exec);
dio.connect('ws://localhost:3000');
dio.subscribe('testEvent');