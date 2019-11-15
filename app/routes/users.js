
let controller = require('../controllers/users.js');

//Passing routes to the API for the users from the server;
module.exports = function(app){
    app.get('/api/users',controller.getUsers);                      //Get the list of users;
    app.get('/api/users/:id',controller.getUser);                   //Obtain a specific user;
    app.post('/api/users', controller.insertUser);                  //Insert an user;
    app.put('/api/users/:id', controller.updateUser);               //Update user data;
    app.delete('/api/users/:id', controller.removeUser);            //Remove an user from the database server;
}