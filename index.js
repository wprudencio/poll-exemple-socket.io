var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

app.use(express.static('public'));

var PORT = 3000;

http.listen(PORT, function() {
    console.log('listening on *:3000');
});

// Home
app.get('/', function(req, res) {
    res.sendfile('index.html');
});


//////////////////////
/////////////////// //
// Socket logic  // //
/////////////////// //
//////////////////////

var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('a user connected - id:' + socket.id);
});



