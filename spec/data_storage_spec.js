var DataStorage = require("../lib/data_storage.js");

describe ("Data Storage Module", function () {

  beforeEach (function() {
    dataStorage = new DataStorage();
  });

  it ("is initialized with an empty state", function() {
    expect(dataStorage._state).toEqual({});
  });

  it ("can add items to state", function (next) {
    dataStorage.addToState("name=michelle", function(err, success){
      expect(success).toEqual('{"name": "michelle"}');
      next();
    });
  });

  it ("can handle errors on set", function(next) {
    dataStorage.addToState("", function(err, success){
      expect(err).toEqual('{"message":"Incorrect Request format"}');
      next();
    });
  });

  it ("can retrieve items from state", function (next) {
    dataStorage.addToState("name=michelle", function(err, success){});
    dataStorage.retrieveValue("key=name", function(err, success){
      expect(err).toEqual(null);
      next();
    });
  });

  it ("can handle errors on get", function (next) {
    dataStorage.addToState("name=michelle", function(err, success){});
    dataStorage.retrieveValue("key=nothere", function(err, success){
      expect(err).toEqual('{"message": "Resource not found"}');
      next();
    });
  });

  it("can handle no params on get", function(next) {
    dataStorage.addToState("name=michelle", function(err, success){})
    dataStorage.retrieveValue("", function(err, success) {
      expect(err).toEqual('{"message": "Resource not found"}');
      next();
    });
  });
});
