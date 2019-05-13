var express = require('express');

var app = express();
var mongoose = require('mongoose');


var servicesschema = new mongoose.Schema({
    topic: String,
    subtopic: String,
    type:String,
    isactive:Boolean,
    username: { type: String, required: true },
    location: {
        dictrict: String,
        city : String,
        address: String,
        email:String
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
    person1 : {
        contact:String,
        name : String,
        description : String
    },
    person2 : {
        contact:String,
        name : String,
        description : String
    },
    places:{
        tp1: String,
        tp2: String,
        tp3: String,
        tp4: String,
        tp5: String,
        tp6: String,
    },
    travelpages: Array,
    

  });

  var servicepage = mongoose.model('services', servicesschema);

  module.exports = servicepage;

