// -------------------------------------------------
//
// Tweet Controller
// 
// -------------------------------------------------

'use strict';

var Tweet = require('./tweet.model');
var Twit = require('twit');
var config = require('../../config/config');
var Bot = require('../../lib/bot');


// -------------------------------------------------
//
// Twit Init
// 
// -------------------------------------------------
var T = new Twit(config.twitter);
var bot = new Bot(config.twitter);



// ------------------------------------------------
// What will the robot say
//
var replyTrack = 'Dog.';





// -------------------------------------------------
//
// Listen on Tweets
// 
// -------------------------------------------------
var stream = T.stream('statuses/filter', {track: '#rbmabot'});




// ------------------------------------------------
// On stream, save to DB
//

stream.on('tweet', function(tweet){
	
	

	// ------------------------------------------------
	// Setup object to save
	//
	
	var tweetObject = {
		text: tweet.text,
		username: tweet.user.screen_name,
		name: tweet.user.name,
		tweetId: tweet.id_str,
		image: tweet.user.profile_image_url
	};


	var tweetEntry = new Tweet(tweetObject);


	tweetEntry.save(function(err){
		if (err){
			console.log(err);
		}
		else{
			console.log('Tweet saved');
			bot.tweet(tweetObject.username, replyTrack, tweetObject.id, callback);
		}
	});

	var callback = function(){
		console.log('Tweet sent to ' +  tweetObject.username);
	};
});


// -------------------------------------------------
//
// Handle errors
// 
// -------------------------------------------------


stream.on('limit', function(limitMessage){
	console.log(limitMessage);
});

stream.on('disconnect', function(disconnectMessage){
	console.log(disconnectMessage);
});

stream.on('warning', function(warning){
	console.log(warning);
});





// -------------------------------------------------
//
// REST
// 
// -------------------------------------------------
exports.index = function(req, res){
	res.json({message: 'yo'});
};