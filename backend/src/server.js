import express from "express"
import {ENV} from "./lib/env.js"
const app=express()
app.get("/health",(req,res)=>{
    res.status(200).json({msg:"success from backend"});
})
app.listen(ENV.PORT,()=>console.log("it is running on server port 3000",ENV.PORT))