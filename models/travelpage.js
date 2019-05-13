var express = require('express');

var app = express();
var mongoose = require('mongoose');


var travelpageschema = new mongoose.Schema({
    topic: String,
    subtopic: String,
    type:String,
    isactive:Boolean,
    username: { type: String, required: true },
    location: {
        dictrict: String,
        city : String,
        address: String
    },
    para1:String,
    para2:String,
    para3:String,

    read1:{
        topic:String,
        para: String,
        img: String
    },
    read2:{
        topic:String,
        para: String,
        img:String
    },
    read3:{
        topic:String,
        para: String,
        img:String
    },
    image_url: Array,
    p1:String,
    p2:String,
    p3:String,
    created_at: Date,
    updated_at: Date,
    servicepages: Array
  });

  var travelpage = mongoose.model('travelpage', travelpageschema);

  module.exports = travelpage;

