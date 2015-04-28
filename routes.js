// -------------------------------------------------
//
// Main app routes
// 
// -------------------------------------------------

'use strict';

module.exports = function(app){
	app.use('/api/tweets', require('./api/tweet'));

	app.route('/', function(req, res){
		res.json({message: 'RBMA NYC Twitter Bot'});
	});
};