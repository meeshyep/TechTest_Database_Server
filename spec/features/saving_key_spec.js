var Browser = require('testing');
var browser = new Browser();
var server = require('../../lib/index.js');
var url = "http://localhost:4000";

describe("saving_key_to_object", function() {

  beforeEach(function() {
    server.listen(4000);
  });

  afterEach(function() {
    server.close();
  });

  it('should successfully return the params data on /set path', function(next) {
    browser.visit(url + '/set?name=Michelle', function(err) {
      expect(browser.html("body")).toContain("name=Michelle");
      next();
    });
  });
});
