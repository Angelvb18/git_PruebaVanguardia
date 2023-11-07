const express = require('express')
const router = express.Router()

const Ingredientes = require('../models/ingredientes.model')

router.get('/',(req,res) => {
    Ingredientes.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.post('/' , (req,res) =>{
    Ingredientes.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = router