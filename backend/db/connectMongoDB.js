import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // No need for useNewUrlParser or useUnifiedTopology
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with failure
    }
};

export default connectMongoDB;
