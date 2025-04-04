const { Cliente } = require('../models');
exports.obtenerproductos = async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
};
exports.crearproductos = async (req, res) => {
    const producto = await producto.create(req.body);
    res.status(201).json(producto);
};
