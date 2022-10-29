require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://root:123456@user-db:27017/user_db?authSource=admin`);
mongoose.Promise = global.Promise;

module.exports = mongoose;

