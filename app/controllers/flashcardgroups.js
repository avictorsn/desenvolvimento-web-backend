const FlashcardGroup = require('../models/FlashcardGroup');
const mongoose = require('mongoose');
const http = require('http');



//  Returns a list of flashcard groups;
module.exports.getFlashcardGroups = function(req, res){

    FlashcardGroup.find({})
    .then(flashcardGroups => {
        res.json(flashcardGroups);
    })
    .catch(err => console.log(err));

    
};

//  Obtain a specific flashcard group;
module.exports.getFlashcardGroup = function(req, res){
    let id = req.params.id;
    FlashcardGroup.findById(id).then((flashcardGroup)=>{
        res.json(flashcardGroup);
    }).catch((err)=>{
        res.status(404).send('Grupo de flashcards não encontrado');
    });
};

//  Insert an flashcard group to the server;
module.exports.insertFlashcardGroup = function(req, res){
    let flashcardGroup = req.body;
    let newFlashcardGroup = new FlashcardGroup({
        _id: new mongoose.Types.ObjectId(),
        groupname: flashcardGroup.groupname
    });
    newFlashcardGroup.save();
    res.json(flashcardGroup);
};

//  Update flashcard group data;
module.exports.updateFlashcardGroup = function(req,res){
    res.status(200).send('Ok pvt');
}

//  Remove an flashcard group from the database server;
module.exports.removeFlashcardGroup = function(req,res){
    let id = req.params.id;
    FlashcardGroup.findByIdAndRemove(id).then((removedFlashcardGroup)=>{
        res.json(removedFlashcardGroup);
    }).catch((err)=>{
        res.status(404).send('Grupo de flashcards não encontrado');
    })
}
