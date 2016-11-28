var DataStorage = require("../lib/data_storage.js");

describe ("Data Storage Module", function () {

  beforeEach (function() {
    dataStorage = new DataStorage();
  });

  it ("is initialized with an empty state", function() {
    expect(dataStorage._state).toEqual({});
  });

  it ("can add items to state", function () {
    dataStorage.addToState({name: "michelle"}, function(err, success){});
    expect(dataStorage._state).toEqual({"name": "michelle"});
  });

  it ("can handle errors", function() {
    dataStorage.addToState({name: ''}, function(err, success){});
    expect(dataStorage._state).toEqual({});
  });

  it ("can retrieve items from state", function () {
    dataStorage.addToState({name: "michelle"}, function(err, success){});
    expect(dataStorage.retrieveValue({key: 'name'})).toEqual("michelle");
  });
});
