const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const timeout = require('connect-timeout')

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(timeout('5s'))
    
    consign()
        .include('controllers')
        .into(app)

    return app;
}