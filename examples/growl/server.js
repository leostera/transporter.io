var io = require('engine.io')
  , server = io.listen(3000);

var i = 0;

server.on('connection', function (socket) {
  setInterval(function () {
    var obj = JSON.stringify({
      label: "testEvent",
      data: {
        message: "Yippee Ki Yay",
        options: {
          title: "Message Number "+i
        }
      }
    });
    console.log("Sending",obj)
    socket.send(obj); 
    i++;
  }, 3000);
});