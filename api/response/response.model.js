// -------------------------------------------------
//
// Response Model
// 
// -------------------------------------------------

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResponseSchema = new Schema({
	createdAt: {type: Date, default: Date.now()},
	text: String,
	image: String
});


module.exports = mongoose.model('Response', ResponseSchema);