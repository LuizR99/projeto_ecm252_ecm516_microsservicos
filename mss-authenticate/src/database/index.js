require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING);
mongoose.Promise = global.Promise;

module.exports = mongoose;