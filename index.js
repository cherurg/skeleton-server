/*var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('connected');
  var i = 0;
  socket.on('data', function (data) {
    console.log(i++);
    socket.broadcast.emit('data', data);
  });
  socket.on('disconnect', function () {
    console.log('disconnected');
  });
});

server.listen(80);*/

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
	origins:'visualmath.ru:* http://visualmath.ru:* http://www.visualmath.ru:* www.visualmath.ru:*'
});

app.disable('x-powered-by');
/*app.use(express.static('public'));*/
app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host+':8000');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    }
);

io.on('connection', function (socket) {

  socket.on('data', function (data) {
    socket.broadcast.emit('data', data);
  });

  socket.on('disconnect', function () {
    
  });

  socket.send('yes?');

});

server.listen(8000);