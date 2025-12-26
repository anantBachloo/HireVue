import express from "express"
import {ENV} from "./lib/env.js"
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
app.listen(ENV.PORT,()=>console.log("it is running on server port",ENV.PORT))