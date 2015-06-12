var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var makeOrigin = function (origin) {
  var str = origin + ':*' + ' ';
  str += 'http://' + origin + ':*' + ' ';
  str += 'www.' + origin + ':*' + ' ';
  str += 'http://' + 'www.' + origin + ':*' + ' ';

  return str;
}

var origins = makeOrigin('visualmath.ru');
origins += makeOrigin('socket.io');
origins += makeOrigin('localhost:9000');
origins += makeOrigin('localhost:63342');
origins += makeOrigin('cherurg.github.io');

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
  origins: origins
});

app.disable('x-powered-by');
app.use(express.static('public'));
app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host+':80');

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
  console.log('yes?');
});

<<<<<<< HEAD:server.js
server.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});
=======
server.listen(process.env.OPENSHIFT_NODEJS_PORT || 80);
>>>>>>> d86c943bb3f1057b354b1a854495f7ac1f2e4283:index.js
