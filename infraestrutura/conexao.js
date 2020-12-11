const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'ba3996c583d29c',
    database: 'heroku_6d8b1ede2e7f849',
    password: 'e737274a',
    multipleStatements: true
})

module.exports = conexao