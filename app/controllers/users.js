const User = require('../models/User');
const mongoose = require('mongoose');
const http = require('http');



//Returns a list of users;
module.exports.getUsers = function(req, res){

    User.find({})
    .then(alunos => {
        res.json(alunos);
    })
    .catch(err => console.log(err));

    
};

////Obtain a specific user;
module.exports.getUser = function(req, res){
    let id = req.params.id;
    let user = users.find((user) => (user.matricula==matricula));
    if(user){
        res.json(user);
    }else{
        res.status(404).send('Aluno não cadastrado');
    }
};

//Insert an user to the server;
module.exports.insertUser = function(req, res){
    let user = req.body;
    let newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name: user.name,
        email: user.email,
        password: user.password
    });
    newUser.save();
    res.json(user);
};

//Update user data;
module.exports.updateUser = function(req,res){
    res.status(200).send('Ok pvt');
}

//Remove an user from the database server;
module.exports.removeUser = function(req,res){
    let matricula = req.params.matricula;
    let _aluno = alunos.find(aluno =>(aluno.matricula == matricula));
    if(_aluno){//Verifica se o aluno está cadastrado no servidor;
        const index = alunos.indexOf(_aluno)
        alunos.splice(index, 1);
        res.json(_aluno);
    }
    else{
        res.status(404).send('Aluno não cadastrado');
    }
}
