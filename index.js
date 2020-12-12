const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

const port = process.env.PORT || 8080;

conexao.getConnection(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress()        
        app.listen(port, () => console.log(`servidor rodando em ${port}`))
    }
})


