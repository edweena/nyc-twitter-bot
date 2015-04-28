// -------------------------------------------------
//
// Bot Class
// 
// -------------------------------------------------

'use strict';


var Twit = require('twit');

var Bot = module.exports = function(config){
	this.twit = new Twit(config);
};




// -------------------------------------------------
//
// Post Tweet
// 
// -------------------------------------------------
Bot.prototype.tweet = function(screenName, status, id, callback){
	if (typeof status !== 'string'){
		return callback(new Error('Tweet must be a string'));
	}

	else if (status.length > 140){
		return callback(new Error('Tweet is too long'));
	}

	this.twit.post('statuses/update', {status: '@' + screenName + ' ' + status, in_reply_to_status_id: id}, callback);
};




