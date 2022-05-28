const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const router = express.Router();


router.post("/", async (req, res) => {
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

router.put("/", async (req, res)  => {
    const id = req.auth.id;
    const {name, email, phoneNumber} = req.body;
    const user = {
        name,
        email,
        phoneNumber,
    }

    

    try{
        const updatedUser = await User.updateOne({ _id: id }, user);

        if (updatedUser.matchedCount === 0) 
            return res.status(400).json({ message: 'User not found!' });


        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({error: error})
    }

});

router.put("/password", async (req, res)  => {
    const id = req.auth.id;
    const {password, confirmPassword} = req.body;

    if(password !== confirmPassword)
            return res.status(400).send({error: 'Passwords do not match'});

    try{
        const hash = await bcrypt.hash(password, 10);
        const user = {password: hash};
        const updatedUser = await User.updateOne({ _id: id }, user);

        if (updatedUser.matchedCount === 0) {
            res.status(422).json({ message: 'User not found!' })
            return
        }

        res.status(200).json("Password updade with success!");
    }
    catch(error){
        res.status(500).json({error: error})
    }

});

router.get("/",async (req, res) => {
    const result = await User.find({_id: req.auth.id});
    res.send(result);
});

router.get("/:id",async (req, res) => {
    const users = await User.find({_id: req.params.id});
    res.send({users});
});




module.exports = app => app.use('/api/user', router);