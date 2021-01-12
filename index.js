var express = require('express');
var fs = require('fs');
var app = express()
var http = require('http')

app.use('/JS_PATH', express.static(__dirname + '/assets/js'))
app.use('/CSS_PATH', express.static(__dirname + '/assets/css'))

var server = app.listen(8000, function(){

})

app.get('/',function(req, res){
    fs.readFile('assets/html/index.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data)
    })
});

app.get('/result', function(req, res){
    fs.readFile('assets/html/result.html', function(error, data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })
});