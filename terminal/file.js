const fs = require('fs');
fs.writeFile('teste.txt', 'Eae, d boa?', e =>{
    console.log(e)
})
fs.appendFile('teste.txt', 'Eae, d boa?', e =>{
    console.log(e)
})

fs.rename('teste.txt', 'teste2.txt', e =>{
    console.log(e)
})
fs.unlink('teste2.txt', e =>{
    console.log(e)
})
console.log(__dirname)
//O writeFile cria um novo arquivo com o conteudo
//O appenFile adiciona um conteudo no arquivo existente
//O rename renomeia o arquivo indicado e o unlink exclui