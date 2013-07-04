var eio = require('engine.io-client')

var transporter = {
  io: eio,

  socket: null,

  transports: [],

  subscriptions: [],
  
  connect: function (uri) {
    this.socket = this.io(uri);
  },

  subscribe: function (eventName) {
    if(this.socket) {
      this.socket.on('message', function (message) {
        var message = JSON.parse(message);
        if(message.label === eventName) {
          this.notify(message.data);
        }
      }.bind(this));
      this.subscriptions.push(eventName);
    } else {
      throw new Error('Failed to use null socket.');
    }
  },

  notify: function (data) {
    this.transports.forEach(function (t) {
      t.publish(data);
    });
  }

};

module.exports = transporter;
