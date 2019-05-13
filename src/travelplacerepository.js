var express = require('express');
var imagefile = require('./fileupload')
var app = express();
var mongoose = require('mongoose');
var models = require('./../models/travelpage')
var modelspecial = require('./../models/special')
var cors = require('cors')

var fileupload = require('express-fileupload')
app.use(fileupload(
  
))
var exports = module.exports = {};


mongoose.connect("mongodb+srv://csanjeewag:Chanaka*1102@cluster0-pms91.mongodb.net/poject?retryWrites=true",{
    useNewUrlPaser:false
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('connection ok')
    }
})

exports.addnewtravelplace = function(reqest,res) {
    let req_file = reqest.files;

    var  imagename_p1= imagefile.imageupload(req_file.p1);
    var  imagename_p2= imagefile.imageupload(req_file.p2);
    var  imagename_p3= imagefile.imageupload(req_file.p3);

    var image_urls = imagefile.imageuploads(req_file)

    let req = reqest.body;
   
    let req_model ={
        topic: req.topic,
        subtopic: req.subtopic,
        type: req.type,
        username: 'chanaka',
        isactive:true,
        location: {
            dictrict: req.dictrict,
            city : req.city,
            address: req.address
        },
        para1: req.para1,
        para2: req.para2,
        para3: req.para3,
    
        read1:{
            topic: req.read1_tpoic,
            para: req.read1_para,
            img:  imagename_p1
        },
        read2:{
          topic: req.read2_tpoic,
          para: req.read2_para,
          img: imagename_p2
        },
        read3:{
          topic: req.read3_tpoic,
          para: req.read3_para,
          img: imagename_p3
        },
        image_url:image_urls,
        p1: imagename_p1,
        p2: imagename_p2,
        p3:  imagename_p3,

        updated_at: Date.now(),
        created_at: Date.now()
      };

  var data = new models(req_model);
    data.save(function(err,result) {
        if (err){
            return  res.status(404).json(result);
        }
        else{
          console.log('page created!');
        return  res.status(200).json(result);
        }
        
      });
      
 
}

exports.viewalltravelplaces = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
          return   res.status(200).json(data);
            
        }
    })
   
  }

  exports.viewalltravelplacetype = function(req,res) {
      

    modelspecial.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
        }else{
          return   res.status(200).json(data);
             
            
        }
    })
   
  }

  exports.a = function(req){
      return 'return awa'+req;
  }

  exports.updatetravelplace = function(reqest,res) {

    
    let req_file = reqest.files;
    if(req_file){
       
    // var image_urls = imagefile.imageuploads(req_file)
    var  imagename_p1= imagefile.imageupload(req_file.p1);
    var  imagename_p2= imagefile.imageupload(req_file.p2);
    var  imagename_p3= imagefile.imageupload(req_file.p3);
    }
   
    
    let req = reqest.body;

    let servicepage = []
    servicepage[0]= req.sp1;
    servicepage[1]= req.sp2;
    servicepage[2]= req.sp3;
    servicepage[3]= req.sp4;
    servicepage[4]= req.sp5;
    servicepage[5]= req.sp6;
    
    let req_model ={
        topic: req.topic,
        subtopic: req.subtopic,
        type: req.type,
        username: 'chanaka',
        isactive:true,
        location: {
            dictrict: req.dictrict,
            city : req.city,
            address: req.address
        },
        para1: req.para1,
        para2: req.para2,
        para3: req.para3,
    
        read1:{
            topic: req.read1_tpoic,
            para: req.read1_para,
            img:  imagename_p1
            // img : req.p1
        },
        read2:{
          topic: req.read2_tpoic,
          para: req.read2_para,
          img: imagename_p2
        // img:req.p2
        },
        read3:{
          topic: req.read3_tpoic,
          para: req.read3_para,
          img: imagename_p3
        // img: req.p3
        },
        // image_url:image_urls,
        servicepages: servicepage,
        updated_at: Date.now()
    
      };

  var data = new models(req_model);
   

    
       
        models.findOneAndUpdate({ _id: req.id }, req_model, function(err, result) {
        if (err){
            return  res.status(404).json(result);
        }
        else{
          console.log('page created!');
        return  res.status(200).json(result);
        }
        
      });
      
 
}

  