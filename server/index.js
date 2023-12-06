const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');  // Agrega esta línea

const connectDb = require('./db.js');
const studentRoutes = require('./controllers/student.controller.js');
const ingredientesRoutes = require('./controllers/ingredientes.controller.js');
const pizzaRoutes = require('./controllers/pizza.controllers.js');
const menuRoutes = require('./controllers/menu.controller.js');

const app = express();

app.use(cors());  // Agrega esta línea para habilitar CORS
app.use(bodyParser.json());
app.use('/api/student', studentRoutes);
app.use('/api/ingredientes', ingredientesRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/menu', menuRoutes);

app.listen(4000, () => console.log('server started at 4000'));

connectDb()
  .then(() => {
    console.log('db connection succeeded');
  })
  .catch((err) => console.log(err));
