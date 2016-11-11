var httpPort = 1313,
    express = require('express'),
    server = express();

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res) {
  res.sendFIle('index.html');
})
server.use(function(req, res) {
  res.redirect('/');
})

server.listen(httpPort);