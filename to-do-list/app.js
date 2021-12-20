//importando o express
const express = require('express');
//O nodemon é um servidor de desenvolvimento, para fazer testes e tal, iniciamos ele com npx nodemon ou nodemon
const nodemon = require('nodemon')
//colocando a função dentro de uma variavel
const app = express();
//Resposta pro client quando o servidor tiver iniciado
app.get('/', (req, res) =>{
    res.send('<h1>Lista de tarefas<h1>');
});
//Mostrando que o servidor já iniciou e está funcionando na porta 3000
app.listen(3000, () =>{
    console.log('Servidor foi iniciado')
})