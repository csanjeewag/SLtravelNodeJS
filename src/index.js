var express = require('express');
var cors = require('cors')
var app = express();
var mongoose = require('mongoose');
var models = require('./../models/travelpage')

var travelplacerepository = require('./travelplacerepository')
var servicerepository = require('./servicespagerepository')
var bodypaser = require('body-parser');
var fileupload = require('express-fileupload')
var imagefile = require('./fileupload')

app.use(express.static(__dirname + './../File'))
app.use(fileupload())
app.use(cors())
app.use(bodypaser());

mongoose.connect("mongodb+srv://csanjeewag:Chanaka*1102@cluster0-pms91.mongodb.net/poject?retryWrites=true",{
    useNewUrlPaser:false
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('connection ok')
    }
})



app.post("/addtravelpage",function(req,res){

    
    if(req.files){
        var filename = req.files;
    }
    else{
        console.log('no file')
    }
     return   travelplacerepository.addnewtravelplace(req,res)
    
})

app.get("/getalltravelpage",function(req,res){
    reqest={}
    travelplacerepository.viewalltravelplaces(reqest,res)
   
   
})

app.get("/getalltravelpages",function(req,res){
    if(req.query.type!="" ){
        reqest={'type':req.query.type} 
        
    }else{
        reqest={}
        
    }
    
     travelplacerepository.viewalltravelplaces(reqest,res)
   
   
})

app.get("/gettravelpage/:id",function(req,res){
    
    reqest={'_id':req.params.id}
   return travelplacerepository.viewalltravelplaces(reqest,res)
   
   
})

app.get("/gettraveltype",function(req,res){
    
    
    reqest={'topic':'traveltype'}
  return  travelplacerepository.viewalltravelplacetype(reqest,res)
   
   
})

app.post("/updatetravelpage",function(req,res){

    return travelplacerepository.updatetravelplace(req,res);
})


//////////////////servicepage/////////

app.get("/getservicetype",function(req,res){
    
    
    reqest={'topic':'servicetype'}
  return  travelplacerepository.viewalltravelplacetype(reqest,res)
   
   
})

app.post("/addservicepage",function(req,res){

    
    if(req.files){
        var filename = req.files;
    }
    else{
        console.log('no file')
    }
     return   servicerepository.addnewservicesplace(req,res)
    
})
app.get("/getallservicepages",function(req,res){
    if(req.query.type!="" ){
        reqest={'type':req.query.type} 
       
    }else{
        reqest={}
        
    }
    
    return servicerepository.viewallservicesplaces(reqest,res)
   
   
})

app.get("/getallservicepage",function(req,res){
 
        reqest={} 
       
    return servicerepository.viewallservicesplaces(reqest,res)
   
   
})

app.get("/getservicepage/:id",function(req,res){
    
    reqest={'_id':req.params.id}
    return servicerepository.viewallservicesplaces(reqest,res)
    
})

app.post("/updateservicepage",function(req,res){
    

     return servicerepository.updateserviceplace(req,res);
})

///////////////////////servicepage//////////////////

app.listen(8080,function(){
    console.log("sever up")
})
