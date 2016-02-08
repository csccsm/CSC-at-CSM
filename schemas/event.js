var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	title: String,
	description: String,
	date: String
});

module.exports = mongoose.model('events', eventSchema);