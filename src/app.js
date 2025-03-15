import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();
import userRouter from "./routes/user.routes.js"


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


//routes  import
app.get('/', (req, res) => {
    res.send('Server is running');  // Respond with a simple message when accessing the root URL
});

//routes declaration
app.use("/api/v1/users",userRouter)

// app.listen(process.env.PORT, ()=>{
//     console.log("server is listening on port 8000")
// })

export default app;