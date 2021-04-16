const mongoose = require("mongoose");
require('./schemas')


var servidor = 'mongodb://localhost:27017/db_cep';

mongoose.connect(servidor, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (!err) {
        console.log("conectado")
    }
    else { console.log("erro para logar" + err) }
    
})