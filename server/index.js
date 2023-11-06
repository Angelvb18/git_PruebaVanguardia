const bodyParser = require('body-parser')
const express = require('express')

const connectDb = require('./db.js')
const studentRoutes = require('./controllers/student.controller.js')


const app = express()

app.use(bodyParser.json());
app.use('/api/student',studentRoutes)

app.listen(3000,()=>console.log('server started at 3000'))

connectDb()
    .then(()=>{
        console.log("db connection succededs")
    })
    .catch(err => console.log(err))