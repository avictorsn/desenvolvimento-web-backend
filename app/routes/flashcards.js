
let controller = require('../controllers/flashcards.js');

//Passing routes to the API for the flashcards from the server;
module.exports = function(app){
    app.get('/api/flashcards',controller.getFlashcards);                      //Get the list of flashcards;
    app.get('/api/flashcards/:id',controller.getFlashcard);                   //Obtain a specific flashcard;
    app.post('/api/flashcards', controller.insertFlashcard);                  //Insert an flashcard;
    app.put('/api/flashcards/:id', controller.updateFlashcard);               //Update flashcard data;
    app.delete('/api/flashcards/:id', controller.removeFlashcard);            //Remove an flashcard from the database server;
}