const mongoose = require('mongoose');

mongoose.connect(`mongodb://root:123456@authenticate-db:27017/authenticate_db?authSource=admin`);
mongoose.Promise = global.Promise;

module.exports = mongoose;