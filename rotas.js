const express = require('express')
const router = express.Router()
const axios = require('axios')
const mongoose = require('mongoose')
const cep_model = mongoose.model('ceps')
const model = require('./model')
const pessoa_model = mongoose.model('person')

router.get('/:cep', async (req, res) => {
    axios({
        method: 'get',
        url: `http://viacep.com.br/ws/${req.params.cep}/json/`
       
    })
    .then(function (response) {
        var cep = new cep_model()
        cep.cep = response.data.cep
        cep.logradouro = response.data.logradouro
        cep.complemento = response.data.complemento
        cep.bairro = response.data.bairro
        cep.localidade = response.data.localidade
        cep.uf = response.data.uf
        cep.ddd = response.data.ddd
        
        cep.save()

        res.sendStatus(200)
    }).catch(err=>{console.log(err)})
})

router.get("/", async (req, res)=>{
    var ceplis = await model.lista_ceps()
    res.json(ceplis)

})

router.post('/pessoa', function (req, res){
    var pessoa= new pessoa_model(req.body)
    pessoa.save()
    res.json(req.body)

 })

router.get('/contatos/:cep', async (req, res) =>{
    var result = await pessoa_model.find({cep:req.params.cep}).then(doc =>{return doc})
    res.json(result)
})

 module.exports=router