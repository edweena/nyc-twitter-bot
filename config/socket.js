// -------------------------------------------------
//
// Socket configs
// 
// -------------------------------------------------

'use strict';

// ------------------------------------------------
// When user disconnects
//

function onDisconnect(socket){

}



// ------------------------------------------------
// On connect
//

function onConnect(socket){


	socket.on('info', function(data){
		console.info(JSON.stringify(data));
	});



	// -------------------------------------------------
	//
	// Insert socket into routes
	// 
	// -------------------------------------------------


	require('../api/tweet/tweet.socket').register(socket);
	
}





// -------------------------------------------------
//
// Exports
// 
// -------------------------------------------------

module.exports = function(socketio){

	socketio.on('connection', function (socket){
		socket.address = socket.handshake.address !== null ? socket.handshake.address.address + ':' + socket.handshake.address.port : process.env.DOMAIN;

		socket.connectedAt = new Date();


		// ------------------------------------------------
		// Call on disconnect
		//

		socket.on('disconnect', function(){

			onDisconnect(socket);

			console.log('DISCONNECTED');
		});


		onConnect(socket);
		console.log('CONNECTED');
		
	});
};