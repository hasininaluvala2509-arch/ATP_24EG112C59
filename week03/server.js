import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/Userapi.js'
import {productApp} from './APIs/Productapi.js'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'

config();//process.env.PORT for accessing port same for DB_URL
const app=exp()
app.use(exp.json())//---------
//add cookie parser middleware
app.use(cookieParser())
//forward req to userapp if path starts with /user-api
app.use("/users-api",userApp)
app.use("/product-api",productApp)
const port=process.env.PORT || 4000
//connect to DB server
async function connectDb(){
    try{
        await connect(process.env.DB_URL)
        console.log("DB Connection Sucess")
        //start server
        app.listen(port,()=>console.log("server on port 4000...."))
    }
    catch(err){
        console.log("Err in DB Connection : ",err)
    }
}

connectDb()

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
    res.json({message:"Error occured",error:"Server side error"})
})//executes only when error is occured
//error contains => {name,msg,callstack}
//respond for both client and server side error