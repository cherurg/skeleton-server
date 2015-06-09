var socket = io('http://localhost:8000/');

socket.on('connect', () => {
    document.write('connected');
});
