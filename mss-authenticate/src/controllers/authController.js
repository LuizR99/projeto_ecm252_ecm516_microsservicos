const express = require('express');
const JWT = require('jsonwebtoken');
const fs = require('fs');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    const {email} = req.body;
    try{
        if(await User.findOne({email}))
            return res.status(400).send({error: 'User already exists'});
            
        const user = await User.create(req.body);

        user.password = undefined;

        return res.status(201).send({user});
    }
    catch(err){
        return res.status(400).send({error: 'Registration failed'});
    }

});

router.post('/login', async (req, res) => {
    const secret = fs.readFileSync("./certs/jwtRS256.key");
    const token = JWT.sign({}, secret, {expiresIn: '1h', algorithm: 'RS256'});
    res.send({token});
});

module.exports = app => app.use('/auth', router);