let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let usersRouter = require('../routes/users.js');
let flashcardsRouter = require('../routes/flashcards.js');
let flashcardGroupsRouter = require('../routes/flashcardGroups.js');
let pomodorosRouter = require('../routes/pomodoros.js');

//Configuring server instance using express;
module.exports = function() {
    let app = express();
    app.set("port", process.env.PORT || 3000);
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(express.static('./public'));
    usersRouter(app);
    flashcardsRouter(app);
    flashcardGroupsRouter(app);
    pomodorosRouter(app);
    return app;
};