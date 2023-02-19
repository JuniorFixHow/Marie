import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const Connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO).then(()=>{
            console.log("Mongo is Connected Successfully")
        })
        .catch(err=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error)
    }
}

export default Connect;