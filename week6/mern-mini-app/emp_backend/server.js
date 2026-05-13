import exp from 'express'
import cors from 'cors' //to accept req  /cross origin resourse sharing /same origin app running on same domain
const app=exp()
import {connect} from 'mongoose'
import { empApp } from './API/empApi.js'
import dotenv from 'dotenv'

dotenv.config()

//add cors middleware
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173"
app.use(cors({
    origin:[corsOrigin]
}))
//body parser middleware
app.use(exp.json());
app.use('/emp',empApp)
//connect to db
const connectDB=async()=>{
    try{
        const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/emp_backend"
        await connect(mongoURI)
        console.log("DB connected ");
        //assign port
        const port = process.env.PORT || 5500
        app.listen(port,()=>console.log("server listening on port : ",port))
    }
    catch(err){
        console.log("err in db connection : ",err)
        process.exit(1)
    }
}

connectDB()
//to handle invalid path
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path ${req.url} is invalid`})
})


//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.code)
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"Error occured",error:err.message})
    }
if(err.name==="CastError"){
    return  res.status(400).json({message:"Invalid User id",error:err.message})
}
    res.json({message:"Error occured",error:`Server side error ${err}`})
})