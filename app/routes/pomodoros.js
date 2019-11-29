
let controller = require('../controllers/pomodoros.js');

//Passing routes to the API for the pomodoros from the server;
module.exports = function(app){
    app.get('/api/pomodoros',controller.getPomodoros);                      //Get the list of pomodoros;
    app.get('/api/pomodoros/:id',controller.getPomodoro);                   //Obtain a specific pomodoro;
    app.post('/api/pomodoros', controller.insertPomodoro);                  //Insert an pomodoro;
    app.put('/api/pomodoros/:id', controller.updatePomodoro);               //Update pomodoro data;
    app.delete('/api/pomodoros/:id', controller.removePomodoro);            //Remove an pomodoro from the database server;
}