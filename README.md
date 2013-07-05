# transporter.io
## a transport system over websockets

![](http://1.bp.blogspot.com/_dUlRbbtjWQA/S9__rfLmgMI/AAAAAAAAACQ/B5CJycibMgg/s1600/TheTransporter1.jpg)

### Usage 
It's intended to be quite easy:

```
var dio = require('../')
  , growl = require('transporter.io-growl');

dio.transports.push(growl);
dio.connect('ws://yourWebsocketServer');
dio.subscribe('testEvent');
```

It doesn't have any security layer yet but it's in my plans to add both bcrypt, BSON and a simple key/secret auth method.

### Transports
For the time being a transport is only an object with a publish function that handles the data received by the socket. It's quite easy to make your own one so get creative! Check [the growl transport](https://github.com/leostera/transporter.io-growl) for an example.

### Credits
Made with :heart: by Leandro Ostera

