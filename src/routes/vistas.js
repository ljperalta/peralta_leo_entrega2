const express = require('express')
const router = express.Router()
const { getProdsVista } = require('../controllers/products');

router.get('/', async (req, res) => {
    try {
        const products = await getProdsVista(); 
        
        res.render("view_products", {layout: "products", products });
    } catch (error) {
        res.status(500).send("Error al cargar los productos");
    }
})

module.exports = router