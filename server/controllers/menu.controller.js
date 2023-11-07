const express = require('express')
const router = express.Router()

const Menu = require('../models/menu.model')

router.get('/',(req,res) => {
    Menu.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.post('/' , (req,res) =>{
    Menu.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = router