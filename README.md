# dispatcher.io
## a dispatcher transport system over websockets

### Usage 
It's intended to be quite easy:

```js
var dio = require('dispatcher.io')
  , growl = require('dispatcher.io-growl');

dio.transports.push(growl);
dio.connect('ws://yourWebsocketServer');
dio.subscribe('testEvent');
```

It doesn't have any security layer yet but it's in my plans to add both bcrypt, BSON and a simple key/secret auth method.

### Transports
For the time being a transport is only an object with a publish function that handles the data received by the socket. It's quite easy to make your own one so get creative! Check [the growl transport](https://github.com/leostera/dispatcher.io-growl) for an example.

### Credits
Made with <3 by Leandro Ostera

