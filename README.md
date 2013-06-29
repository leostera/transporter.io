# dispatcher.io
## a dispatcher transport system over websockets

### Usage 
It's intended to be quite easy:

```
var dio = require('../')
  , growl = require('dispatcher.io-growl');

dio.transports.push(growl);
dio.connect('ws://yourWebsocketServer');
dio.subscribe('testEvent');
```

It doesn't have any security layer yet but it's in my plans to add both bcrypt, BSON and a simple key/secret auth method.

### Credits
Made with <3 by Leandro Ostera

