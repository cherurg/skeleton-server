'use strict';

var socket = io('http://194.177.21.129/');

socket.on('connect', function () {
    document.write('connected');
});
