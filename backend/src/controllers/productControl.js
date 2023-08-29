const ProductModel = require("../models/productModel");

const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProduct };
