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
var cleverbot = require('cleverbot.io');
var Q = require('q');

var cBot = new cleverbot('iLYB4QucluiEclsI','cZbfRI6JtkJEOvMRAvoq1zSSK0FZxWul');
cBot.setNick('RBMA-Bot');




// -------------------------------------------------
//
// Reponses
// 
// -------------------------------------------------

// ------------------------------------------------
// What will the robot say
//
var replyTrack = [
	'⚡Storm Rave maps coming soon. Stay posted.⚡',
	'We’re still keeping the Storm Rave location under wraps, but we’ll have a map for you shortly.⚡⚡',
	'Check back later for your Storm Rave location map.⚡☢',
	'Storm Rave is coming… We’ll let you know where soon.⚡☢',
	'This hashtag will soon guide you to Storm Rave. Please check back later.⚡⚡',
	'Try using this hashtag again in some days. I might have more info.⚡⚡',
	'Yo. Storm Rave location will be announced soon. Try again in a few days.⚡☢',
	'I wish I had more information for you about Storm Rave at the moment, but I do not. Try again soon.⚡⚡',
	'Frankie Bones, Adam X and more. More info coming soon. Try this hashtag in some days.⚡⚡',
	'Hello dear friend. I currently do not have all the info for Storm Rave in my database. But will soon.⚡⚡ '

];




// -------------------------------------------------
//
// Twit Init
// 
// -------------------------------------------------
var T = new Twit(config.twitter);
var bot = new Bot(config.twitter);




function clever(text){
	var deferred = Q.defer();

	cBot.create(function(err, session){
		if (err){
			console.log(err);
			deferred.reject(err);
		}

		else{
			cBot.ask(text, function(err, response){
				if (err){
					console.log(err);
					deferred.reject(err);
				}

				else{
					deferred.resolve(response);
				}
			});
		}
	});

	return deferred.promise;
}


// -------------------------------------------------
//
// Listen on tweets
// 
// -------------------------------------------------

var stream = T.stream('statuses/filter', {track: '#stormrave'});


// ------------------------------------------------
// On stream, save to DB
//

stream.on('tweet', function(tweet){


	// ------------------------------------------------
	// After response
	//
	
	function callback(){
		console.log('Finished');
	}
		
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


			var randomResponse = replyTrack[Math.floor(Math.random() * replyTrack.length)];


			bot.tweet(tweetObject.username, randomResponse, tweetObject.id, callback);
			
		}
	});
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