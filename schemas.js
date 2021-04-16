const mongoose = require("mongoose");

var Cep = new mongoose.Schema({
    cep:String,
    logradouro:String,
    complemento:String,
    bairro:String,
    localidade:String,
    uf:String,
    ddd:String,

})
mongoose.model('ceps', Cep)


var Pessoas = new mongoose.Schema({
    nome:String,
    sobrenome:String
})
mongoose.model('person', Pessoas)