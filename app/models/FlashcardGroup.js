const mongoose = require('mongoose');

const flashcardGroupSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    groupname: String
});

module.exports = mongoose.model('FlashCardGroup', flashcardGroupSchema);