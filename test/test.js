'use strict';

var socket = io('http://localhost/');

socket.on('connect', function () {
    document.write('connected');
});
