var server = require ('../../index.js');
var request = require('request');
var url = 'http:localhost:4000';

describe ('retrieving_key_from_object', function () {

  beforeEach (function (next) {
    server.listen(4000);
    request(url + '/set?name=michelle', function(err, res, body){next()});
  });

  afterEach (function() {
    server.close();
  });

  it('should successfully return params data on the /set path', function(next) {
    request(url + '/get?key=name', function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body).toEqual('{"requested_value": "michelle"}');
      next();
    });
  });

  it("should return error data on unknown key", function(next) {
    request(url + '/get?key=nothere', function (error, response, body) {
      expect(response.statusCode).toEqual(400);
      expect(body).toEqual('{"message": "Resource not found"}');
      next();
    });
  });

  it("should return error data on no params", function(next) {
    request(url + '/get?key=nothere', function(error, response, body){
      expect(response.statusCode).toEqual(400);
      expect(body).toEqual('{"message": "Resource not found"}');
      next();
    });
  });
});
