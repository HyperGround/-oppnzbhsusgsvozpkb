var http = require('http');
http.createServer(function(req, res) {
  res.write("Paint Web Server Update By Sixur_405");
  res.end();
}).listen(8080);
