import mongoose from "mongoose"
import {ENV} from "./env.js"
export const connectDB =async ()=>{
    try{
        if(ENV.DB_URL){
            throw new Error("DB_URL is not defined in environment variables")
        }
        const conn=await mongoose.connect(ENV.DB_URL);
        console.log("connected to MongoDB:",conn.connection.host);
    }
    catch(error){
        console.error("Error connecting to MongoDB",error) //0 Means go , 1 means don't go
    }
}