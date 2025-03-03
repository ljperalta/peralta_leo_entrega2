const express = require("express");
const router = express.Router();
const products      = require("./products");
const vistaProducts = require("./vistas");

router.use("/api/products/", products);
router.use("/products/", vistaProducts);

module.exports = router;