'use strict';

var socket = io('nodejs-hsemath1.rhcloud.com');

socket.on('connect', function () {
    document.write('connected');
});
