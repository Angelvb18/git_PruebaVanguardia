const bodyParser = require('body-parser')
const express = require('express')

const connectDb = require('./db.js')
const studentRoutes = require('./controllers/student.controller.js')
const ingredientesRoutes = require('./controllers/ingredientes.controller.js')
const pizzaRoutes = require('./controllers/pizza.controllers.js')
const menuRoutes = require('./controllers/menu.controller.js')

const app = express()

app.use(bodyParser.json());
app.use('/api/student',studentRoutes)
app.use('/api/ingredientes',ingredientesRoutes)
app.use('/api/pizza',pizzaRoutes)
app.use('/api/menu',menuRoutes)

app.listen(3000,()=>console.log('server started at 3000'))

connectDb()
    .then(()=>{
        console.log("db connection succededs")
    })
    .catch(err => console.log(err))