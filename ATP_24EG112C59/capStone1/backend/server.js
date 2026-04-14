import exp from 'express'
import {config} from 'dotenv'
config()
const app=exp()
import {connect} from 'mongoose'
import { userApp } from './APIs/UserApi.js'
import { authorApp } from './APIs/AuthorApi.js'
import { adminApp } from './APIs/AdminApi.js'
import { commonApp } from './APIs/CommonApi.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//body parser middleware
app.use(exp.json());
//add cookie parser .
app.use(cookieParser())
//add cors middleware
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true//enable to send token back
}))
//path level middleware
app.use('/user-api',userApp);
app.use('/author-api',authorApp);
app.use('/admin-api',adminApp);
app.use('/auth',commonApp);


//connect to db
const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB connected ");
        //assign port
        const port=process.env.PORT || 5000
        app.listen(port,()=>console.log("server listening on port : ",port))
    }
    catch(err){
        console.log("err in db connection : ",err)
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