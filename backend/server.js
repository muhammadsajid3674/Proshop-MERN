import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sampleProducts from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors';

dotenv.config();
const app = express();
app.use(cors());

connectDB()

app.get('/api/product', (req, res) => {
    res.json(sampleProducts)
});

app.get('/api/product/:id', (req, res) => {
    const product = sampleProducts.find(e => e._id === req.params.id)
    res.json(product)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_DEV} on http://localhost:${PORT}`.yellow.bold))