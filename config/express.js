// -------------------------------------------------
//
// Express configs
// 
// -------------------------------------------------

'use strict';


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	app.use(cors());
};