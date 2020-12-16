const Atendimento = require('../models/atendimentos')
const faker = require('../node_modules/faker')

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Teste')
    })
    
    app.get('/atendimentos/:cpf', (req, res) => {
        const { cpf } = req.params
      
        res.status(200).json({
          cpf,
          nome: faker.name.findName(),
          dataDeNascimento: faker.date.past()
        })
    })

    app.get('/atendimentos', (req, res) => { 
        Atendimento.lista()
            .then(resultados => res.json(resultados))
            .catch(erros => res.status(400).json(erros))
    })

    app.get('/atendimentos/:id',(req, res) => { 
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos',(req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
            .catch(erros => res.status(400).json(erros))
    })

    app.patch('/atendimentos/:id',(req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id',(req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)
    })
}