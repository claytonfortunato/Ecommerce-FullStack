const express = require("express");
const { getProduct } = require("../controllers/productControl");
const router = express.Router();

router.post("/api/products", getProduct);

module.exports = router;
