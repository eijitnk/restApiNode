class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos 
        (
            id int NOT NULL AUTO_INCREMENT, 
            cliente varchar(11) NOT NULL, 
            pet varchar(20), 
            servico varchar(20) NOT null, 
            data datetime NOT NULL,
            dataCriacao datetime NOT NULL,
            status varchar(20) NOT null, 
            observacoes text, 
            PRIMARY KEY(id)
        ) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimento criada com sucesso')
            }
        })
    }

    criarPets() {
        const query = `CREATE TABLE IF NOT EXISTS Pets 
        (
            id int NOT NULL AUTO_INCREMENT, 
            nome varchar(50), 
            imagem varchar(200), 
            PRIMARY KEY(id)
        ) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8`

        this.conexao.query(query, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pets foi criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas