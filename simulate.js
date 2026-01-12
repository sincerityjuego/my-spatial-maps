const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let id = 1; // object identifier
let lat = 14.450; // example starting position
let lng = 120.92;

setInterval(() => {
    // update position
    lat += (Math.random() - 0.5) * 0.01;
    lng += (Math.random() - 0.5) * 0.01;

    socket.emit('updateLocation', { id, lat, lng });

}, 1000);
