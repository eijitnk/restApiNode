const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.get('/:cpf', (req, res) => {
        const { cpf } = req.params
      
        res.status(200).json({
          cpf,
          nome: faker.name.findName(),
          dataDeNascimento: faker.date.past()
        })
    })
    
    consign()
        .include('controllers')
        .into(app)

    return app;
}