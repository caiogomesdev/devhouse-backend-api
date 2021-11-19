require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

class App{
    constructor(){
        this.server = express()

        this.database()
        this.middleware()
        this.routes()
    }
    database(){
        let URI = process.env.DB
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.connection.on('connected', ()=> console.log('Connected on Database'))
        mongoose.connection.on('error', err => console.log('erro'))
    }
    middleware(){
        this.server.use(express.json())
        this.server.use(
            '/files', 
            express.static(path.resolve(__dirname, '..', 'uploads'))
            );
    }
    routes(){
        this.server.use(routes)
    }
}

module.exports = new App().server;