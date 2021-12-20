const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Olá');
    res.send();
})
router.post('/', (req, res) =>{
    console.log(req.body)
    res.status(200).send(req.body);
})
router.get('/:id',(req, res)=>{
    console.log(req.params.id)
    res.send(`id: ${req.params.id}`)
})
//exportando a função
module.exports = router;