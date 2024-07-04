import mongoose from "mongoose";
import  dotenv  from "dotenv";

dotenv.config();

const connectMongoDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,
            useUnifiedTopology: true,});
            console.log(`mongodb connected:${conn.connection.host}`);
    } catch (error) {
        console.log("error in connecting mongodb");
    }
}


export default connectMongoDB;