import express from 'express'
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const productRouter = express.Router();

// @desc Fetch all products
// @route /api/product
// @access Public
productRouter.get('/', asyncHandler(async (req, res) => {
    const model = await Product.find({});
    res.json(model);
}));

// @desc Fetch single product
// @route /api/product/:id
// @access Public
productRouter.get('/:id', asyncHandler(async (req, res) => {
    const singleProduct = await Product.findById(req.params.id)
    if (singleProduct) {
        res.json(singleProduct);
    } else {
        res.status(404);
        throw new Error('Data not found');
    }
}));

export default productRouter;