//importando o express
const express = require('express');
const path = require('path')
require('./config/database')
//importando a função
const checkListRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')

//O nodemon é um servidor de desenvolvimento, para fazer testes e tal, iniciamos ele com npx nodemon ou nodemon
const nodemon = require('nodemon');
const req = require('express/lib/request');
//colocando a função dentro de uma variavel
const app = express();
//O express.json é utilizado para que o servidor consiga receber e tratar dados no formato json
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))) 
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use('/', rootRouter);
app.use('/checklists', checkListRouter);
//Mostrando que o servidor já iniciou e está funcionando na porta 3000
app.listen(3000, () =>{
    console.log('Servidor foi iniciado')
})