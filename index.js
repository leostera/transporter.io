var eio = require('engine.io-client')
  , growl = require('growl');

var notifications = {
  io: eio,

  socket: null,

  transports: [],

  subscriptions: [],
  
  connect: function (uri) {
    console.log("Connecting to", uri);
    this.socket = this.io(uri);
    console.log("...result:", !!this.socket);
  },

  subscribe: function (eventName) {
    console.log('Subscribing to', eventName);
    if(this.socket) {
      this.socket.on('message', function (data) {
        var data = JSON.parse(data);
        console.log("Receiving", data);
        this.notify(data);
      }.bind(this));
      this.subscriptions.push(eventName);
    } else {
      console.log('Oops! No socket!');
    }
  },

  notify: function (data) {
    console.log("Publishing data to "+this.transports.length+" transports");
    this.transports.forEach(function (t) {
      t.publish(data);
    });
  }

};

notifications.transports.push({
  publish: function (data) {
    console.log("Growling", data);
    growl(data.message, data.options);
  }
});

notifications.connect('ws://localhost:3000');

notifications.subscribe('test');
