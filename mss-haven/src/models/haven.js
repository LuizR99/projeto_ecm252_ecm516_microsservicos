const mongoose = require('../database');

const HavenSchema = new mongoose.Schema({
    idUser: {
        type: String,
        require: true,
    },
    typeHouse:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    },
    typePeople:{
        type: String,
        required: true,
    },
    quantityPeople:{
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



const Haven = mongoose.model('Haven', HavenSchema);

module.exports = Haven;