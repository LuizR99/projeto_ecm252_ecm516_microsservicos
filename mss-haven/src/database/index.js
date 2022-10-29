require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb://root:123456@haven-db:27017/haven_db?authSource=admin");
mongoose.Promise = global.Promise;

module.exports = mongoose;