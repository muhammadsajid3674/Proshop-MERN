import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './backend/config/db.js'
import colors from 'colors';
import productRouter from './backend/routes/productRoutes.js'
import { errorHandler, notFound } from './backend/middleware/errorMiddleware.js';

dotenv.config();
const app = express();
app.use(cors());

connectDB()


app.use('/api/product', productRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} on http://localhost:${PORT}`.yellow.bold))