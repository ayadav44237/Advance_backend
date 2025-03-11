import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();


//app.use(cors()); this is also good but we can also givr more parameters like origin and more as per the requirement like origin, whitelisting etc given below;

app.use(cors({
    origin:process.env.PORT,
    credentials:true
}))

//whenever these is use we would use middleware

app.use(express.json({
    limit:"20kb"
}))

//earlier express don't take express with that ease ,we need to use body parser etc;

//in case of getiing data from url we need to use urlencoded parameter
app.use(express.urlencoded({
    extended:true,limit:"20kb"
}))

app.use (express.static("public")) //when we need to use major put in public folder.

app.use(cookieParser());//cookieParser needs to access the cookie of server , send the cookie of server

export {app};