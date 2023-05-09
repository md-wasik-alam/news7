import mongoose from "mongoose"

const connectDb  = async (req,res) => {
    if(mongoose.connection.readyState){
        return mongoose.connection;
    }
    return await mongoose.connect(process.env.DB_URL)
}

export default connectDb