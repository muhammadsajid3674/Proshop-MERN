import express from 'express'
import { getProductById, getProducts } from '../Controller/productController.js';


const productRouter = express.Router();


productRouter.route('/').get(getProducts);

// @desc Fetch single product
// @route /api/product/:id
// @access Public
productRouter.route('/:id').get(getProductById);

export default productRouter;