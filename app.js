// -------------------------------------------------
//
// Main App
// 
// -------------------------------------------------
'use strict';


// -------------------------------------------------
//
// Basics
// 
// -------------------------------------------------
var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/config');




// -------------------------------------------------
//
// Connect to DB
// 
// -------------------------------------------------
mongoose.connect(config.mongo.uri);



// -------------------------------------------------
//
// Setup Server
// 
// -------------------------------------------------
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server);

require('./config/socket')(socketio);
require('./config/express')(app);
require('./routes')(app);




// -------------------------------------------------
//
// Start Server
// 
// -------------------------------------------------
server.listen(process.env.PORT || 5000, function(){
	console.log('Express server running');
});



// -------------------------------------------------
//
// Expose App
// 
// -------------------------------------------------
exports = module.exports = app;
