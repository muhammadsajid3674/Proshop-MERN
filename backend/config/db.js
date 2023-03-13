import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
    try {
        const conn = await mongoose.connect(DB_URL, {
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