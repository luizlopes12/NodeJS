const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(req.method);
    console.log(req.url);
})
server.listen(3000, ()=>{
    console.log('Servidor ativo!')
})

//Aqui criamos um servidor http e colocamos ele na porta 3000 do localhost
//Se tudo der certo e o servidor estiver rodando executa a função