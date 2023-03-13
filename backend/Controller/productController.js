import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route /api/product
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const model = await Product.find({});
    res.json(model);
})

// @desc Fetch single product
// @route /api/product/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const singleProduct = await Product.findById(req.params.id)
    if (singleProduct) {
        res.json(singleProduct);
    } else {
        res.status(404);
        throw new Error('Data not found');
    }
})

export { getProducts, getProductById }