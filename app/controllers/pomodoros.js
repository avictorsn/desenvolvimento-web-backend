const Pomodoro = require('../models/Pomodoro');
const mongoose = require('mongoose');
const http = require('http');



//  Returns a list of pomodoros;
module.exports.getPomodoros = function(req, res){

    Pomodoro.find({})
    .then(pomodoros => {
        res.json(pomodoros);
    })
    .catch(err => console.log(err));

    
};

//  Obtain a specific pomodoro;
module.exports.getPomodoro = function(req, res){
    let id = req.params.id;
    Pomodoro.findById(id).then((pomodoro)=>{
        res.json(pomodoro);
    }).catch((err)=>{
        res.status(404).send('Pomodoro não encontrado');
    });
};

//  Insert an pomodoro to the server;
module.exports.insertPomodoro = function(req, res){
    let pomodoro = req.body;
    let newPomodoro = new Pomodoro({
        _id: new mongoose.Types.ObjectId(),
        checklist: pomodoro.checklist,
        session: pomodoro.session
    });
    newPomodoro.save();
    res.json(pomodoro);
};

//  Update pomodoro data;
module.exports.updatePomodoro = function(req,res){
    res.status(200).send('Ok pvt');
}

//  Remove an pomodoro from the database server;
module.exports.removePomodoro = function(req,res){
    let id = req.params.id;
    Pomodoro.findByIdAndRemove(id).then((removedPomodoro)=>{
        res.json(removedPomodoro);
    }).catch((err)=>{
        res.status(404).send('Pomodoro não encontrado');
    })
}
