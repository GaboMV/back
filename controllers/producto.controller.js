const { Producto } = require('../models');
exports.obtenerproductos = async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
};
exports.crearproductos = async (req, res) => {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
};
