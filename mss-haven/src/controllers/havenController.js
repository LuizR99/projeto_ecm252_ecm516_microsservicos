const express = require('express');

const User = require('../models/haven');

const router = express.Router();

router.post('/', async (req, res) => {
    const {typeHouse, description, location, typePeople, quantityPeople} = req.body;
    const haven = {
        idUser: req.auth.id,
        typeHouse,
        description,
        location,
        typePeople,
        quantityPeople,
    };

    try {
        const newHaven = await User.create(haven);

        return res.status(201).send({newHaven});
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }

});



router.put('/:id', async (req, res) => {
    const havenId = req.params.id;
    const {typeHouse, description, location, typePeople, quantityPeople} = req.body;
    const haven = {
        idUser: req.auth.id,
        typeHouse,
        description,
        location,
        typePeople,
        quantityPeople,
    };

    try {
        const updateHaven = await User.updateOne({_id: havenId},haven);

        if (updateHaven.matchedCount === 0) 
            return res.status(400).json({ message: 'User not found!' });

        return res.status(200).send({haven});
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }

});



router.get('/', async (req, res) => {
    try {
        const havents = await User.find();
        return res.status(200).send({havents});
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
})

router.get('/user', async (req, res) => {
    const id = req.auth.id;
    try {
        const havents = await User.find({idUser: id});
        return res.status(200).send({havents});
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const havents = await User.find({_id: id});
        return res.status(200).send({havents});
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
})





module.exports = app => app.use('/api/haven', router);