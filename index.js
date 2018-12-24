/*
*
* Primary API file
*
*/
var config        = require('./config');
var http          = require('http');
var StringDecoder = require('string_decoder').StringDecoder;
var url           = require('url');

// Instantiate the http server
var httpServer = http.createServer(function(req, res) {
  var parsedUrl   = url.parse(req.url, true)
  var path        = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '')

  if ( trimmedPath == config.routes.sample ) {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200);

    var payload = JSON.stringify(config.responseObject)
    res.end(payload);
  } else {
    res.writeHead(404);
    res.end();
  }
});

// Start the http server
httpServer.listen(3000);
