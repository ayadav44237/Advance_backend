// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose"; 
// import {DB_NAME} from "./constant.js";
import connectDB from "./db/index.js";
import app from "./app.js"

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    try {
        app.listen(process.env.PORT||4000,()=>{
            console.log(`Server Connectet at PORT: ${process.env.PORT}`)
        })
    } catch (error) {
         console.log("Error in connection DB",error)
    }
})
.catch((err)=>{
 console.log("Error in connecting data",err)
})





// import express from "express";

// const app=express();



// ( async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log("error",error);
//         throw error;
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//         console.log("MongoDB Connected");
//     })
//   } catch (error) {
//     console.error("error",error);
//     throw error;
//   }
// })();