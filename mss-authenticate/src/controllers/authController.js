const express = require('express');
const JWT = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const router = express.Router();


router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const secret = fs.readFileSync("./certs/jwtRS256.key");

    const user = await User.findOne({email}).select("+password");

    if(!user)
        return res.status(400).send({error: 'User not found'});
    
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Invalid password'});
    
    user.password = undefined;

    const token = JWT.sign({id: user.id}, secret, {expiresIn: '1h', algorithm: 'RS256'});
    res.send({token});
});

module.exports = app => app.use('/api/auth', router);