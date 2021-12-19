//importando o express
const express = require('express');
const nodemon = require('nodemon')
//colocando a função dentro de uma variavel
const app = express();

app.get('/', (req, res) =>{
    res.send('<h1>Lista de tarefas<h1>');
});

app.listen(3000, () =>{
    console.log('Servidor foi iniciado')
})