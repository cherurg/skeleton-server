var socket = io('http://194.177.21.129/');

socket.on('connect', () => {
    document.write('connected');
});
