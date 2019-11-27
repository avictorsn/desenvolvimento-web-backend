const Flashcard = require('../models/Flashcard');
const mongoose = require('mongoose');
const http = require('http');



//  Returns a list of flashcards;
module.exports.getFlashcards = function(req, res){

    Flashcard.find({})
    .then(flashcards => {
        res.json(flashcards);
    })
    .catch(err => console.log(err));

    
};

//  Obtain a specific flashcard;
module.exports.getFlashcard = function(req, res){
    let id = req.params.id;
    Flashcard.findById(id).then((flashcard)=>{
        res.json(flashcard);
    }).catch((err)=>{
        res.status(404).send('Flashcard não encontrado');
    });
};

//  Insert an flashcard to the server;
module.exports.insertFlashcard = function(req, res){
    let flashcard = req.body;
    let newFlashcard = new Flashcard({
        _id: new mongoose.Types.ObjectId(),
        group: flashcard.group,
        question: flashcard.question,
        answer: flashcard.answer
    });
    newFlashcard.save();
    res.json(flashcard);
};

//  Update flashcard data;
module.exports.updateFlashcard = function(req,res){
    res.status(200).send('Ok pvt');
}

//  Remove an flashcard from the database server;
module.exports.removeFlashcard = function(req,res){
    let id = req.params.id;
    Flashcard.findByIdAndRemove(id).then((removedFlashcard)=>{
        res.json(removedFlashcard);
    }).catch((err)=>{
        res.status(404).send('Flashcard não encontrado');
    })
}
