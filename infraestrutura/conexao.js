const mysql = require('mysql')
const dbConfig = require('./db.config')

const conexao = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
    multipleStatements: true,
    connectionLimit: 10
})

module.exports = conexao