const express = require('express')
const axios = require('axios').default;
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
require ('./db')
const rotas = require('./rotas')
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({ type: '*/*' }))
app.use('/', rotas)


 


 


    
    



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})