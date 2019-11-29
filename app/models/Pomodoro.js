const mongoose = require('mongoose');

const pomodoroSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    checklist: [String],
    session: {
        title: String,
        duration: String
    }
});

module.exports = mongoose.model('Pomodoro', pomodoroSchema);