import exp from 'express'
import { ProductModel } from '../model.js/ProductModel.js'

export const productApp=exp.Router()

productApp.post("/product",async(req,res)=>{
    const newProduct=req.body
    const newProductDoc=new ProductModel(newProduct)
    const res1=await newProductDoc.save()
    console.log(res1)
    res.json({message:"Product created "})
})

productApp.get("/product",async(req,res)=>{
    let ProductList=await ProductModel.find()
    res.json({message:"Products",payload:ProductList})
})
//read by id
productApp.get("/product/:id",async(req,res)=>{
    const pid=req.params.id
    const product=await ProductModel.findOne({productId:pid})
    if(!product)
        return res.json({mesage:"Product not found"})
    return res.json({message:"Product found",payload:product})
})
//update user by pid
productApp.put('/product/:id',async(req,res)=>{
    const modifiedData=req.body;
    const pid=req.params.id;
    const updatedproduct=await ProductModel.findOneAndUpdate({productId:pid},{$set:modifiedData},{new:true})
    res.status(200).json({message:"product data modified",payload:updatedproduct})
})

//Delete a product by productId
productApp.delete('/product/:id',async(req,res)=>{
    const pid=req.params.id;
    let deletedProduct=await ProductModel.findOneAndDelete(pid)
    if(!deletedProduct){
        return res.status(400).json({message:"user not found"})
    }
    res.status(200).json({message:"user deleted",payload:deletedProduct})
})

// REST API with below operations
//      a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId