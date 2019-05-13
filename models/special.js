var express = require('express');

var app = express();
var mongoose = require('mongoose');


var pageschema = new mongoose.Schema({
    topic: String,
    type : Array
  });

  var modelpage = mongoose.model('specials', pageschema);

  module.exports = modelpage;

