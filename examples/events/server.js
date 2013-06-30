var io = require('engine.io')
  , server = io.listen(3000);

var i = 0;

server.on('connection', function (socket) {
  setInterval(function () {
    var obj = JSON.stringify({
      label: "testsResults",
      data: {
        eventName: "testsFinished",
        options: {
          message: "Yippee Ki Yay",
          title: "Message Number "+i
        }
      }
    });
    console.log("Sending",obj)
    socket.send(obj); 
    i++;
  }, 3000);
});