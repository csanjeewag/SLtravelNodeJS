var express = require('express');
var randomstring = require("randomstring");
 
var app = express();
var mongoose = require('mongoose');
var cors = require('cors')
var fileupload = require('express-fileupload')
app.use(fileupload(
   
))
var exports = module.exports = {};

exports.imageupload = function(req,res) {
    
   
    if(req && req.size<(5*1024*1024)){
     
        filename = req.name;
        encriptcode = randomstring.generate(20);
        req.mv('./File/Images/'+encriptcode+filename,function(error){
            if(error){
                console.log(error)
                
            }
            else{
               var  result = encriptcode+filename;
                console.log('fileuploaded')
                
            }
        })
        return encriptcode+filename;;
    }
    else{
        console.log('error')
        return ''
    }
   
  }

  exports.imageuploads = function(req,res){
      var id = 0;
      image_url = [];
      url = '';
      while(req.image){

        if(req.image[id]){
          url =  this.imageupload(req.image[id])
        }else{
            break;
        }
        image_url[id] = url;
        
        id = id+1;
      }
      return image_url;
  }