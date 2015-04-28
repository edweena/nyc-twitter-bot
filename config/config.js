// -------------------------------------------------
//
// DB Setup, etc
// 
// -------------------------------------------------


'use strict';

module.exports = {
	mongo: {
		uri: process.env.MONGOLAB_URI
	}, 

	twitter: {
		consumer_key: process.env.TWIT_CONSUMER_KEY,
		consumer_secret: process.env.TWIT_CONSUMER_SECRET,
		access_token: process.env.TWIT_ACCESS_TOKEN,
		access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
	}
};


