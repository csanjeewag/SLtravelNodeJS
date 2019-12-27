var express = require('express');
var randomstring = require("randomstring");
 
var app = express();
var fileupload = require('express-fileupload');
const resizeOptimizeImages = require('resize-optimize-images');
app.use(fileupload(
   
))
var exports = module.exports = {};

exports.imageupload = function(req,res) {
    
   
    if(req && req.size<(5*1024*1024)){
     
        filename = req.name;
        encriptcode = randomstring.generate(20);
        req.mv('./File/Images/'+encriptcode+filename,function(error){
            if(error){
       
                
            }
            else{
              
                (async () => {
                    // Set the options.
                    const options = {
                        images: ['./File/Images/'+encriptcode+filename],
                        width: 600,
                        quality: 85
                    };
                    
                    // Run the module.
                    await resizeOptimizeImages(options);
                })();
                
            }
         
        })
      

        return encriptcode+filename;;
    }
    else{

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