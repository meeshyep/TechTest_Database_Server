var http = require('http');
var url = require('url');
var DataStorage = require ('./lib/data_storage.js');
var dataStorage = new DataStorage();

this.server = http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url);

  var send_set_response = function (err, success) {
    if (err) {
      res.writeHead(400, {'Content-Type': 'JSON'});
      res.end(err);
    }
    else {
      res.writeHead(201, {'Content-Type': 'JSON'});
      res.end(success);
    }
  };

  var send_get_response = function (err, success) {
    if (err) {
      res.writeHead(400, {'Content-Type': 'JSON'});
      res.end(err);
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(success);
    }
  };

  if (parsedURL.pathname == "/set" && req.method == 'GET') {
    dataStorage.addToState(parsedURL.query, send_set_response);
  }
  else if (parsedURL.pathname == "/get" && req.method == 'GET') {
    data.Storage.retrieveValue(parsedURL.query, send_get_response);
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/css'});
    res.end('Resource not found');
  }
});

exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};

app.listen(4000);
