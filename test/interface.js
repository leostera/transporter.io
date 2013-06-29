var dio = require('../');

describe('API', function () {
  
  it('should complain if subscribing without a connection', function () {
    
    (function () {
      dio.subscribe('test');
    }).should.throwError(/^Fail.*/);

  });

});