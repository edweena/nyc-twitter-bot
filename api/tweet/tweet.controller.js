// -------------------------------------------------
//
// Tweet Controller
// 
// -------------------------------------------------

'use strict';

var Tweet = require('./tweet.model');
var Response = require('../response/response.model');
var Twit = require('twit');
var config = require('../../config/config');
var Bot = require('../../lib/bot');



// -------------------------------------------------
//
// Reponses
// 
// -------------------------------------------------





// -------------------------------------------------
//
// Twit Init
// 
// -------------------------------------------------
// var T = new Twit(config.twitter);
// var bot = new Bot(config.twitter);


// // -------------------------------------------------
// //
// // Listen on tweets
// // 
// // -------------------------------------------------

// var stream = T.stream('statuses/filter', {track: '#stormrave'});


// // ------------------------------------------------
// // On stream, save to DB
// //

// stream.on('tweet', function(tweet){



// 	// ------------------------------------------------
// 	// After response
// 	//
	
// 	function callback(){
// 		console.log('Finished');
// 	}
		
// 	// ------------------------------------------------
// 	// Setup object to save
// 	//
	
// 	var tweetObject = {
// 		text: tweet.text,
// 		username: tweet.user.screen_name,
// 		name: tweet.user.name,
// 		tweetId: tweet.id_str,
// 		image: tweet.user.profile_image_url
// 	};


// 	var tweetEntry = new Tweet(tweetObject);


// 	tweetEntry.save(function(err){
// 		if (err){
// 			console.log(err);
// 		}
// 		else{
// 			console.log('Tweet saved');


// 			//get response item

// 			Response.find({}, function(err, responses){
// 				if (err){
// 					console.log(err);
// 				}

// 				var randomResponse = responses[Math.floor(Math.random() * responses.length)].text;
				
// 				setTimeout(function(){
// 					bot.tweet(tweetObject.username, randomResponse, tweetObject.id, callback);
// 				},5000);


// 			});
// 		}
// 	});
// });


	


// // -------------------------------------------------
// //
// // Handle errors
// // 
// // -------------------------------------------------


// stream.on('limit', function(limitMessage){
// 	console.log(limitMessage);
// });

// stream.on('disconnect', function(disconnectMessage){
// 	console.log(disconnectMessage);
// });

// stream.on('warning', function(warning){
// 	console.log(warning);
// });











// -------------------------------------------------
//
// REST
// 
// -------------------------------------------------
exports.index = function(req, res){
	res.json({message: 'yo'});
};