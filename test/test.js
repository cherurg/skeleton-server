'use strict';

var socket = io('http://localhost:8000/');

socket.on('connect', function () {
    document.write('connected');
});
