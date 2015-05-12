// -------------------------------------------------
//
// Response Controller
// 
// -------------------------------------------------

'use strict';

var Response = require('./response.model');


// -------------------------------------------------
//
// Index
// 
// -------------------------------------------------
exports.index = function(req, res){
	Response.find({}, function(err, responses){
		if (err){
			return res.status(500).send(err);
		}

		return res.status(200).json(responses);
	});
};



// -------------------------------------------------
//
// Show
// 
// -------------------------------------------------
exports.show = function(req, res){
	Response.findById(req.params.id, function(err, response){
		if (err){
			return res.status(500).send(err);
		}

		return res.status(200).json(response);
	});
};


// -------------------------------------------------
//
// Create
// 
// -------------------------------------------------
exports.create = function(req, res){

	console.log(req.body);

	var newResponse = new Response(req.body);

	newResponse.save(function(err, savedResponse){
		if (err){
			return res.status(500).send(err);
		}

		return res.status(201).json(savedResponse);
	});
};


// -------------------------------------------------
//
// Update
// 
// -------------------------------------------------
exports.update = function(req, res){

	var id = req.body._id;

	console.log(req.body);

	Response.findById(id, function(err, response){
		if (err){
			return res.status(500).send(err);
		}

		if (!response){
			return res.status(404).send('Response not found');
		}

		response.text = req.body.text;



		response.save(function(err){
			if (err){
				return res.status(500).send(err);
			}

			return res.status(202).json(response);
		});
	});
};



// -------------------------------------------------
//
// Exports Destroy
// 
// -------------------------------------------------
exports.destroy = function(req, res){

	Response.findByIdAndRemove(req.params.id, function(err, item){
		if (err){
			return res.status(500).send(err);
		}

		return res.status(202).send(item);
	});
};


