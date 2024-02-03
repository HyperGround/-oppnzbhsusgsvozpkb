var http = require('http');
http.createServer(function(req, res) {
  res.write("Anxious Planet Forever");
  res.end();
}).listen(8080);
