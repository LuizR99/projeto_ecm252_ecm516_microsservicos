const express = require('express');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user');
const queue = require("../mq/rabbitmq");

const router = express.Router();


router.post("/", async (req, res) => {
    const {email} = req.body;

    try{
        
        if(await User.findOne({email}))
            return res.status(400).send({success:false, error: 'User already exists'});

        const {password, confirmPassword, name, phoneNumber} = req.body;
        if(password !== confirmPassword)
            return res.status(400).send({success:false, error: 'Passwords do not match'});

        const hash = await bcrypt.hash(password, 10);
        const id = uuidv4();

        queue.sendToQueue("user", {id: id, userName: email, password: hash});
        
        const newUser = {id, name, email, phoneNumber};

        const user = await User.create(newUser);

        user.password = undefined;

        return res.status(201).send({success:true, data: user});
    }
    catch(err){
        return res.status(400).send({success:false, error: 'Registration failed' + err});
    }

});

router.put("/", async (req, res)  => {
    const id = req.auth.id;
    const {name, email, phoneNumber} = req.body;
    const user = {
        name,
        email,
        phoneNumber,
    }

    try{
        const updatedUser = await User.updateOne({ id: id }, user);

        if (updatedUser.matchedCount === 0) 
            return res.status(400).json({ success:false, message: 'User not found!' });


        res.status(200).json({success:true, data: user});
    }
    catch(error){
        res.status(500).json({success:false, error: error})
    }

});



router.get("/data",async (req, res) => {
    const result = await User.find({id: req.auth.id});
    res.send({success:true, data: result});
});

router.get("/",async (req, res) => {
    res.send({success:true, data: "Its work!!"});
});

router.get("/data/:id",async (req, res) => {
    const users = await User.find({id: req.params.id});
    res.send({success:true, data: users});
});



module.exports = app => app.use('/api/user', router);