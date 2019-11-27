let http = require('http');
let app = require('./app/config/express')();
const connector = require('./app/db/connector');

//Creates an instance related to the server, passing custom configurations of express module from 'app/config/express';
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express Server escutando na porta "+app.get('port'));
    connector.connect;
});