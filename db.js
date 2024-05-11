 const mongoose = require('mongoose');

 var mongoURL ='mongodb+srv://JECRC:Jecrc@cluster0.upbp54d.mongodb.net/JECRC'

 mongoose.connect(mongoURL,{useUnifiedTopology : true, useNewURLParser:true})

 var connection =mongoose.connection

 connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
 })

 connection.on('connected',()=>{
    console.log('Mondo DB Connection Successful')
 })

 module.exports = mongoose