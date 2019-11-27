console.log('Inicializando conector!');
const mongoose = require('mongoose');

module.exports.mongoose = mongoose;
module.exports.connect = mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('API conectada ao banco de dados!');
    
})
