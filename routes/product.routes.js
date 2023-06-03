const express = require('express')
const router = express.Router()

// Se importan los controladores
const {
    obtenerProductos
} = require('../controllers/product.controllers');

router.get('/product', obtenerProductos);

router.post('/product', (req, res)=> {
    res.send('POST product');
});

router.put('/product', (req, res)=> {
    res.send('PUT product');
});

router.delete('/product', (req, res)=> {
    res.send('DELETE product');
});

// Exportaciones
module.exports = router;