var socket = io('nodejs-hsemath1.rhcloud.com');

socket.on('connect', () => {
    document.write('connected');
});
