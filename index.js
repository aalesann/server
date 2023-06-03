// Importaciones
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// Inicializa la librería express
const app = express();
const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY


// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Rutas del servidor - GET - POST - PUT - DELETE
app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/product.routes'));

// Ejecución del servidor
app.listen(port, ()=> console.log(`Server on http://localhost:${port}`))

