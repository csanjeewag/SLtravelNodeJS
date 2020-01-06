var express = require('express');
var imagefile = require('./fileupload')
var app = express();
var mongoose = require('mongoose');
var models = require('../models/services')
var cors = require('cors')

var fileupload = require('express-fileupload')
app.use(fileupload(
  
))
var exports = module.exports = {};



exports.addnewservicesplace = function(reqest,res) {
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
            address: req.address,
            email : req.email
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
        person1 : {
            contact: req.contact1,
            name :  req.contactname1,
            description : req.contactdescription1
        },
        person2 : {
            contact: req.contact2,
            name :  req.contactname2,
            description : req.contactdescription2
        },
        updated_at: Date.now(),
        created_at: Date.now()
       

      };

  var data = new models(req_model);
    data.save(function(err,result) {
        if (err){
            return  res.status(404).json(result);
        }
        else{
          console.log('service created!');
        return  res.status(200).json(result);
        }
        
      });
      
 
}

exports.viewallservicesplaces = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
          return   res.status(200).json(data);
            
        }
    })
   
  }



  exports.updateserviceplace = function(reqest,res) {

    let req_file = reqest.files;
    if(req_file){
       
     var image_urls = imagefile.imageuploads(req_file)
    var  imagename_p1= imagefile.imageupload(req_file.p1);
    var  imagename_p2= imagefile.imageupload(req_file.p2);
    var  imagename_p3= imagefile.imageupload(req_file.p3);
    }

    

    let req = reqest.body;
   
    let travelpage = []
    travelpage[0]= req.tp1;
    travelpage[1]= req.tp2;
    travelpage[2]= req.tp3;
    travelpage[3]= req.tp4;
    travelpage[4]= req.tp5;
    travelpage[5]= req.tp6;



    let req_model ={
        topic: req.topic,
        subtopic: req.subtopic,
        type: req.type,
        username: 'chanaka',
        isactive:true,
        location: {
            dictrict: req.dictrict,
            city : req.city,
            address: req.address,
            email : req.email
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
        person1 : {
            contact: req.contact1,
            name :  req.contactname1,
            description : req.contactdescription1
        },
        person2 : {
            contact: req.contact2,
            name :  req.contactname2,
            description : req.contactdescription2
        },
        places:{
            tp1: req.tp1,
            tp2: req.tp2,
            tp3: req.tp3,
            tp4: req.tp4,
            tp5: req.tp5,
            tp6: req.tp6,
        },
        travelpages: travelpage,
        updated_at: Date.now(),
        
    
      };

  var data = new models(req_model);
   
      if(image_urls){
        req_model.image_url = image_urls
      }
      if(imagename_p1){
        req_model.p1 = imagename_p1
      } 
       if(imagename_p2){
        req_model.p2 = imagename_p2
      }
      if(imagename_p3){
        req_model.p3 = imagename_p3
      }
       
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

