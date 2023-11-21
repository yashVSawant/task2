const express = require('express');
const path = require('path');

const router = express.Router();
const Appointment = require('../models/appointment');


router.get('/appointments',(req,res,next)=>{
    Appointment.findAll()
    .then(appointments =>{
        res.send(appointments)
    })
})

 router.get('/home',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'))
})

 router.get('/post-appointment',(req,res,next)=>{

    const name = req.query.name
    const email = req.query.email
    const phone = req.query.phone
    console.log(name,email,phone)
    Appointment.create({
        name:name,
        email:email,
        phone:phone
    }).then(result=>{
        console.log(result);
        res.redirect('/appointment/home')
    })
    .catch(err=>console.log(err))
    
})


 router.get('/delete-appointment/:id',(req,res,next)=>{
    Appointment.findAll({where:{id:req.params.id}})
    .then(appointment=>{
       return appointment[0].destroy(); 
    })
    .then(res.redirect('/appointment/home'))
})

module.exports= router;