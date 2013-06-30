var dio = require('dispatcher.io')
  , events = require('dispatcher.io-events');

dio.transports.push(events);
dio.connect('ws://localhost:3000');
dio.subscribe('testsResults');

events.on('testsFinished', function (data) {
  console.log('This was triggered by an event!', this.event, data);
});