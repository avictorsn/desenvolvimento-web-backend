const mongoose = require('mongoose');
const connector = require('../db/connector');
connector.connect;

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);