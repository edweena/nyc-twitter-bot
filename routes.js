// -------------------------------------------------
//
// Main app routes
// 
// -------------------------------------------------

'use strict';

module.exports = function(app){
	app.use('/api/tweets', require('./api/tweet'));
	app.use('/api/responses', require('./api/response'));


	app.get('/', function(req, res){
		res.json({message: 'RBMA Twitter Bot'});
	});
};