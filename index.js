var express = require('express');
var fs = require('fs');
var app = express()
var http = require('http')

app.use('/JS_PATH', express.static(__dirname + '/assets/js'))
app.use('/CSS_PATH', express.static(__dirname + '/assets/css'))
eval(fs.readFileSync('assets/js/RList.js', 'utf-8'));

var server = app.listen(8000, function(){

})

app.get('/',function(req, res){
    fs.readFile('assets/html/index.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data)
    })
});

var myMBTI;

app.get('/result/:id', function(req, res){
    myMBTI = req.params.id
    res.redirect('/finalResult')
});

app.get('/finalResult', function(req, res){
    fs.readFile('assets/html/result.html', function(error, data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h2>' + R[myMBTI].b + '</h2>')
        res.write('<h5>' + R[myMBTI].w + '</h5>')
        res.write('<h4>' + R[myMBTI].e + '</h4>')
        res.end(data)
    })
})

app.post('/', function(req, res){
    console.log('i am not happy')
})

app.post('/result', function(req, res){
    console.log('hello')
})