const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

const port = process.env.PORT || 3000;

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