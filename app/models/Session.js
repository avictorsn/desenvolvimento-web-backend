const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    flashcardGroupId: mongoose.Types.ObjectId,
    flashcardList: [
        {
            rightAnswer: Boolean,
            flashcardId: mongoose.Types.ObjectId
    }]
});

module.exports = mongoose.model('Session', sessionSchema);
