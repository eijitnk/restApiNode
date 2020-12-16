const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const faker = require('faker')

const port = process.env.PORT || 3000;

conexao.getConnection(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress()        
        app.listen(port, () => console.log(`servidor rodando em ${port}`))

        app.get('/:cpf', (req, res) => {
            const { cpf } = req.params
          
            res.status(200).json({
              cpf,
              nome: faker.name.findName(),
              dataDeNascimento: faker.date.past()
            })
        })
    }
})