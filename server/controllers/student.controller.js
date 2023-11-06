const express = require('express')
const router = express.Router()

const Student = require('../models/student.model')

router.get('/',(req,res) => {
    Student.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.post('/' , (req,res) =>{
    Student.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = router