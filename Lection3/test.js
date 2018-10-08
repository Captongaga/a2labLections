var express = require('express');
var url = require('url');
var app = express();

function server(req, res) {
    res.writeHead(418);
    res.write("Hello world!");
    res.end();
}

function hello(req, res) {
    var request = url.parse(req.url, true).query;
    res.write("Hello" + request.name);
    res.end();
}

app.get('/', server);
app.get('/hello', hello);
app.listen(8080);


// 127.0.0.1:8080
