const express = require('express');
const JWT = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const queue = require("../mq/rabbitmq");

queue.consume("user", async (message) => {
    const body = JSON.parse(message.content.toString());
    const {userName} = body
    try{
        if(await User.findOne({userName}))
            return res.status(400).send({success:false, error: 'User already exists'});

        const user = await User.create(body);
        user.password = undefined;

        return res.status(201).send({success:true, data: user});
    }
    catch(err){
        return res.status(400).send({success:false, error: 'Registration failed'});
    }
})

const router = express.Router();


router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    userName = email;
    const secret = fs.readFileSync("./certs/jwtRS256.key");

    const user = await User.findOne({userName}).select("+password");

    if(!user)
        return res.status(400).send({error: 'User not found'});
    
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({success:false, error: 'Invalid password'});
    
    user.password = undefined;

    const token = JWT.sign({id: user.id}, secret, {expiresIn: '1h', algorithm: 'RS256'});
    res.send({success:true, token});
});

router.post('/register', async (req, res) => {
    
});

router.put("/password", async (req, res)  => {
    const id = req.auth.id;
    const {password, confirmPassword} = req.body;

    if(password !== confirmPassword)
            return res.status(400).send({success:false, error: 'Passwords do not match'});

    try{
        const hash = await bcrypt.hash(password, 10);
        const user = {password: hash};
        const updatedUser = await User.updateOne({ id: id }, user);
        if (updatedUser.matchedCount === 0) {
            res.status(400).json({success:false,  message: 'User not found!' })
            return
        }

        res.status(200).json({success:true, message:"Password updade with success!"});
    }
    catch(error){
        res.status(500).json({success:false, error: error})
    }

});

module.exports = app => app.use('/api/auth', router);