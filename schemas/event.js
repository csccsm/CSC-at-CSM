'use strict'

let mongoose = require('mongoose');

let eventSchema = new mongoose.Schema({
	title: String,
	description: String,
	date: String
});

module.exports = mongoose.model('events', eventSchema);
