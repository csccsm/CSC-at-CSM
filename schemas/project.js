'use strict'

let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String
});

module.exports = mongoose.model('projects', projectSchema);
