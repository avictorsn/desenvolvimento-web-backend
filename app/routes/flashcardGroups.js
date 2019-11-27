
let controller = require('../controllers/flashcardgroups.js');

//Passing routes to the API for the flashcard groups from the server;
module.exports = function(app){
    app.get('/api/flashcardgroups',controller.getFlashcardGroups);                      //Get the list of flashcard group;
    app.get('/api/flashcardgroups/:id',controller.getFlashcardGroup);                   //Obtain a specific flashcard group;
    app.post('/api/flashcardgroups', controller.insertFlashcardGroup);                  //Insert an flashcard group;
    app.put('/api/flashcardgroups/:id', controller.updateFlashcardGroup);               //Update flashcard group data;
    app.delete('/api/flashcardgroups/:id', controller.removeFlashcardGroup);            //Remove an flashcard group from the database server;
}