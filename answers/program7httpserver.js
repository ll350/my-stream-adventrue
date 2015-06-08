var http = require('http');
var through = require('through2');
var port = process.argv[2];

var theTransformer = through(function(chunk, encoding, callback) {
  this.push(chunk.toString().toUpperCase());
  callback();
});

var server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    req.pipe(theTransformer).pipe(res);
  }
}
);

server.listen(port);
