const express = require('express')
const axios = require('axios').default;
const app = express()
const port = 3000

app.get('/:cep', (req, res) => {
    axios({
        method: 'get',
        url: `http://viacep.com.br/ws/${req.params.cep}/json/`
       
      })
        .then(function (response) {
            res.send(response.data)
        });
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})