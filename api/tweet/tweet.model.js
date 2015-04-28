// -------------------------------------------------
//
// Tweet Model
// 
// -------------------------------------------------

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TweetSchema = new Schema({
	createdAt: {type: Date, default: Date.now()},
	username: String,
	name: String,
	text: String,
	tweetId: Number,
	image: String
});


module.exports = mongoose.model('Tweet', TweetSchema);