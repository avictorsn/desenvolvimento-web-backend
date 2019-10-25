const connector = require('./db/connector');
const User = require('./models/User');

connector.connect.then(()=>{
    let newUser = new User({
        _id: new connector.mongoose.Types.ObjectId(),
        name: 'João',
        email: 'teste@gmail.com',
        password: '1234'
    });
    newUser.save();
    console.log('Adicionou no banco de dados do MongoDB!');
    
})
.catch((err)=>{
    console.log('Erro ao tentar conectar!');
    console.log(err);
    
});
