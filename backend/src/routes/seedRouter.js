const express = require("express");
const asyncHandler = require("express-async-handler");
const { sampleProducts } = require("../data/Products");
const { ProductModel } = require("../models/productModel");

export const seedRouter = express.Router();

seedRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({});
    const createdProducts = await ProductModel.insertMany(sampleProducts);
    res.json({ createdProducts });
  })
);
