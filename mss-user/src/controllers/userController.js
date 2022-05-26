const express = require('express');


const User = require('../models/user');

const router = express.Router();


router.post('/register', async (req, res) => {
    const {email} = req.body;
    try{
        if(await User.findOne({email}))
            return res.status(400).send({error: 'User already exists'});

        const {password, confirmPassword} = req.body;
        if(password !== confirmPassword)
            return res.status(400).send({error: 'Passwords do not match'});

        const user = await User.create(req.body);

        user.password = undefined;

        return res.status(201).send({user});
    }
    catch(err){
        return res.status(400).send({error: 'Registration failed'});
    }

});


router.get('/protect', async (req, res) => {
    res.send({message: 'Hello World'});
});



module.exports = app => app.use('/user', router);