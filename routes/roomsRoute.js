//import { Router } from "express";

 const express = require('express');
  const router = require('express').Router();

  const Room = require('../models/room')
 
 
 router.get('/getallrooms' , async(req , res)=>{
     // router code here

     try {
        const rooms = await Room.find({})
        res.send(rooms)
     } catch (error) {
       return res.status(400).json({message: error });
     }
 });

 router.post('/getroombyid' , async(req , res)=>{
  // router code here
   const roomid = req.body.roomid
  try {
     const room = await Room.findOne({_id : roomid})
     res.send(room)
  } catch (error) {
    return res.status(400).json({message: error });
  }
});
 
 

 
 module.exports  = router