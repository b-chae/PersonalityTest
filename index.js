var express = require('express');
var fs = require('fs');
var app = express()
var http = require('http')

app.use('/JS_PATH', express.static(__dirname + '/assets/js'))
app.use('/CSS_PATH', express.static(__dirname + '/assets/css'))
app.use('/STATIC_PATH', express.static(__dirname + '/static'));
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
        res.write('<div class="text-4xl mb-5 mx-5">' + R[myMBTI].b + '</div>')
        res.write('<div class="text-xl underline mb-12 mx-5">' + R[myMBTI].w + '</div>')
        res.write('<div class="text-2xl mx-5 whitespace-wrap">' + R[myMBTI].e + '</div>')
        res.end(data)
    })
})

app.post('/', function(req, res){
    console.log('i am not happy')
})

app.post('/result', function(req, res){
    console.log('hello')
})