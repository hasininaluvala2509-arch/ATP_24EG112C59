import exp from 'express'
import { connect } from 'mongoose'
import { productApp } from './APIs/Productapi.js'
const app=exp()
app.use(exp.json())
app.use("/product-api",productApp)

async function connectDb(){
    try{
        await connect("mongodb://localhost:27017/productdb")
        console.log("DB productdb connected ssuccessfully")

        app.listen(5000,()=>console.log("server port 5000"))
    }
    catch(err){
        console.log("Error in Db Connection : ",err)
        }
}
connectDb()

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
})