const express = require('express');
const router = express.Router();
const { obtenerproductos, crearproductos} = require('../controllers/producto.controller');
router.get('/producto', obtenerproductos);
router.post('/producto', crearproductos);

module.exports = router;