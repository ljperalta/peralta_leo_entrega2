const express = require('express');
const routerP = express.Router();

const { getProds, getProdById, addNewProduct, updateProdById, deleteProdById } = require('../controllers/products');

routerP.get('/', getProds);
routerP.get('/:id', getProdById); // Obtener un producto por ID
routerP.post('/', addNewProduct); // Obtener un producto por ID
routerP.put('/:id', updateProdById);
routerP.delete('/:id', deleteProdById); // Eliminar un producto por ID

module.exports = routerP;