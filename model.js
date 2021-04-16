const mongoose = require("mongoose");

const cep_model = mongoose.model('ceps')

exports.lista_ceps = async () =>{

    
    var ceps = await cep_model.find()
    .then(cps =>{
        var lista =[]
        cps.forEach((e)=>{
            
            lista.push(e)
       })
        return lista
    }).catch(err=>{console.log(err)})
    return ceps
}

exports.locceps = async (param_cep) =>{
    var loc = await cep_model.findOne({cep:param_cep})
    .then(loc =>{
        return loc
    }).catch(err=>{console.log(err)})
    return loc


}