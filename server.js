var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

var server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(index);
});
var port = Number(process.env.PORT || 3000)
server.listen(port);
