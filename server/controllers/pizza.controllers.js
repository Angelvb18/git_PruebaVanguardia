const express = require('express')
const router = express.Router()

const Pizza = require('../models/pizza.model')

router.get('/',(req,res) => {
    Pizza.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.post('/' , (req,res) =>{
    Pizza.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = router