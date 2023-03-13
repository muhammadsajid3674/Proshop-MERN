import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors';
import productRouter from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRouter from './routes/userRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const DB_URL = 'mongodb+srv://admin:admin123@cluster0.s4xr5cb.mongodb.net/proshop?retryWrites=true&w=majority';
connectDB(DB_URL)


app.use('/api/product', productRouter)
app.use('/api/user', userRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} on http://localhost:${PORT}`.yellow.bold))