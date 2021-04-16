const express = require('express')
const axios = require('axios').default;
const app = express()
const port = 3000
require ('./db')
const mongoose = require('mongoose')
const cep_model = mongoose.model('ceps')
const cep = require('./model')


 app.get('/:cep', async (req, res) => {
     var local = await cep.locceps(req.params.cep)
     res.json(local)


    //     axios({
//         method: 'get',
//         url: `http://viacep.com.br/ws/${req.params.cep}/json/`
       
//       })
//         .then(function (response) {
//             var cep = new cep_model()
//             cep.cep = response.data.cep
//             cep.logradouro = response.data.logradouro
//             cep.complemento = response.data.complemento
//             cep.bairro = response.data.bairro
//             cep.localidade = response.data.localidade
//             cep.uf = response.data.uf
//             cep.ddd = response.data.ddd
           
//             cep.save()

//             res.sendStatus(200)
//         }).catch(err=>{console.log(err)})
    
})

app.get("/", async (req, res)=>{
    var ceplis = await cep.lista_ceps()
    res.json(ceplis)

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})