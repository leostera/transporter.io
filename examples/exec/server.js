var io = require('engine.io')
  , server = io.listen(3000);

var i = 0;

server.on('connection', function (socket) {
  setInterval(function () {
    var obj = JSON.stringify({
      label: "testEvent",
      data: {
        message: "echo",
        options: ['Yippee Ki Yay']
      }
    });
    console.log("Sending",obj)
    socket.send(obj); 
    i++;
  }, 3000);
});