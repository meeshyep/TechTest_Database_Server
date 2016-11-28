var Browser = require('testing');
var browser = new Browser();
var server = require('../../lib/index.js');
var url = "http://localhost:4000/";

describe("saving_key_to_object", function() {

  beforeEach(function() {
    server.listen(4000);
  });

  afterEach(function() {
    server.close();
  });

  it("should successfully visit the site", function(next) {
    browser.visit(url, function(err) {
      expect(browser.success).toBe(true);
      expect(browser.html("body")).toContain("Here is the database server");
      next();
    });
  });
});
