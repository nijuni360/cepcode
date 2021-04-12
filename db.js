var MongoClient = require('mongodb').MongoClient;



var servidor = 'mongodb://localhost:27017/db_cep';




MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" +erro);
    else
        console.log("Conexão estabelecida com suceddo");

    
    var cep = {
        cep : "05182-040" ,
        endereço : {} ,
        numero : {} ,
        complemento : {} ,
        cidade : {},

              
    };
    
    
    var dbo = db.db("db_cep");
    var colecao = dbo.collection("usuarios");


    colecao.insertOne(cep, function(erro, resultado){
        if(erro)
            console.log("Erro ao inserir documento: " + erro);
        else
            console.log("Documento inserido com seucesso");
    });

     
    
    
    db.close();
});