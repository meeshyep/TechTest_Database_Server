var DataStorage = require("../lib/data_storage.js");

describe ("Data Storage Module", function () {

  beforeEach (function() {
    dataStorage = new DataStorage();
  });

  it ("is iniitialized with an empty state", function() {
    expect(dataStorage._state).toEqual({});
  });

  it ("can add items to state", function () {
    dataStorage.addToState({name: "michelle"});
    expect(dataStorage._state).toEqual({"name": "michelle"});
  });

  it ("can retrieve items from state", function () {
    dataStorage.addToState({name: "michelle"});
    expect(dataStorage.retrieveValue({key: 'name'})).toEqual("michelle");
  });
});
