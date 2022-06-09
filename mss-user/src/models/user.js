const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    phoneNumber:{
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});





const User = mongoose.model('User', UserSchema);

module.exports = User;