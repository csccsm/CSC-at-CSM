'use strict'

let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String
});

module.exports = mongoose.model('projects', projectSchema);
