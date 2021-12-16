const pross = require('process')
console.log('Digite seu nome');
pross.stdin.on('data', (keyboard) =>{
    pross.stdout.write(`Seja bem vindo ${keyboard}`)
    pross.exit();
})