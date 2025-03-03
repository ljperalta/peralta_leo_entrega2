const express = require("express");
const router = express.Router();
const products      = require("./products");
const vistaProducts = require("./views.router");

router.use("/api/products/", products);
router.use("/products/", vistaProducts);

module.exports = router;