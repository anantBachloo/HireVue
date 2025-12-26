import express from "express"
import {ENV} from "./lib/env.js"
import {connectDB} from "./lib/db.js"
import path from "path"
const app=express()
const _dirname=path.resolve();
app.get("/health",(req,res)=>{
    res.status(200).json({msg:"success from backend 123 "});
})
app.get("/books",(req,res)=>{
    res.status(200).json({msg:"success from backend 123 books"});
})
if(ENV.NODE_ENV=="production"){
    app.use(express.static(path.join(_dirname,"../frontend/dist")))

app.get("/{*any}",(res,req)=>{
    res.sendFile(path.join(_dirname,"../frontend","dist","index.html"))
})
}
const startServer=async ()=>{
    try{
        await connectDB();
        app.listen(ENV.PORT,()=>console.log("it is running on server port",ENV.PORT))
    }
    catch(error){
        console.error("Error starting the server",error) 
    }
}
startServer()