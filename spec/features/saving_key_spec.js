var server = require('../../lib/index.js');
var request = require('request');
var url = "http://localhost:4000";

describe("saving_key_to_object", function() {

  beforeEach(function() {
    server.listen(4000);
  });

  afterEach(function() {
    server.close();
  });

  it('should successfully return the params data on /set path', function(next) {
    request(url + '/set?name=michelle', function(error, response, body) {
      expect(body).toEqual('{"name":"michelle"}');
      next();
    });
  });

  it('should return an error on an incorrect format', function(next) {
    request(url + '/set?name=michelle', function(error, response, body) {
      expect(response.statusCode).toEqual(400);
      expect(body).toEqual('{"message": "This is an incorrect request format"}');
      next();
    });
  });

  it("should return error on no params", function(next) {
    request(url + '/set', function(error, response, body) {
      expect(response.statusCode).toEqual(400);
      expect(body).toEqual('{"message":"This is an incorrect request format"}');
      next();
    });
  });
});
