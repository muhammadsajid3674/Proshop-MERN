import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://admin:admin123@cluster0.s4xr5cb.mongodb.net/foodshop?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB is connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`MongoDb ERROR: ${error}`.red.underline.bold);
        process.exit(1)
    }
}

export default connectDB;