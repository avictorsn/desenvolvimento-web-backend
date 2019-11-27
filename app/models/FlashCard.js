const mongoose = require('mongoose');

const flashcardSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    group: String,
    question: String,
    answer: String
});

module.exports = mongoose.model('FlashCard', flashcardSchema);