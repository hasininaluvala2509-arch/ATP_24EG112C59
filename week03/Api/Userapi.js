//create mini express app(Separate route)  
import exp from 'express'
import { UserModel } from '../model.js/UserModel.js'
import {hash, compare} from 'bcryptjs'  
//compare is to convert plain to hashed password
import {verifyToken} from '../middleware/verifyToken.js'
import jwt from 'jsonwebtoken'
const {sign}=jwt
export const userApp=exp.Router()   //create special route not http server

//user login
userApp.post("/auth",async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body
    //verify email
    let user = await UserModel.findOne({email:email})
    //if email not existing
    if(!user){
        return res.status(404).json({message:"Invalid email"})
    }
    //copare password
    let result=await compare(password,user.password) 
    if(result===false)
      return res.status(400).json({message:"Invalid password"})
    //if password is correct
      //create token ( jsonwebtoken -jwt --jaat)
      const signedToken=sign({email:user.email},process.env.SECRECT_KEY,{expiresIn:"10w"}) //time in "10"-> 10milli sec w-.weeks 10->sec
      //send token in res
      res.cookie("token",signedToken,{
        httpOnly:true,//very very imp
        sameSite:"lax",//"strict"-> send cookie only to applications running in same domains
                //"none"   -> can send to every application possibility to csrf attack (creating similar dummy page nd steal cred)
                //"lax"    -> means relaxed restriction (between strict nd none) (behaves like strict also navigating through same user returns cookies back)
        secure:false//:(
          })
      res.status(200).json({message:"Login successfull",payload:user})

})

//define user api routes
//create new user
userApp.post("/users",verifyToken,async(req,res)=>{
    //get new user obj from req
    const newUser=req.body
    //hash pass
    const hashedPass = await hash(newUser.password,10) //10 is cost factor i.e hashing rounds
    //replace pass with hash password
    newUser.password=hashedPass
    //create new user doc
    const newUserDocument=new UserModel(newUser)
    //sasve
    const result = await newUserDocument.save()
    console.log(result)
    //send res
    res.status(201).json({message: "user created"})
    //201(status code) rep successful creation of resource
    //number camparision better than string (avoids case,spaces)  (User created === User created ->false)
    //200 -> success for all (URD operation )except for create 
    //201 -> created (creating is also success but imp )
    //400 series client side 
    //400 -> bad request (incorrect data given by client)
    //401 -> Unauthorised   ( in authentication topic)
    //404 -> Not found 
    //500 series server side error
    //500 -> Server error
})

//read all users (protecting) 
userApp.get("/users",verifyToken,async(req,res)=>{
    //get user details from req
    let userObj=req.user;
    //read all users from db
    let usersList= await UserModel.find()
    //send res
    res.status(200).json({message:"users are",payload:usersList})
});

//Read a user by object id
userApp.get("/userss",verifyToken,async(req,res)=>{
    //read user email from req
    const userEmail=req.user?.email;
    //console.log(userEmail)
    //read obj id from req params
   // const uid=req.params.id
    //find user by id
    const user=await UserModel.findOne({email:userEmail}).populate("cart.product")
    //if user not found
    if(!user){
       return res.status(404).json({message:"User not found"})
        //: Cannot set headers after they are sent to the client below stmt also responding (reture or else) should be included for handling error in terminal
    }
    //send res
    return res.status(200).json({message:"user found",payload:user})
})
//findbyid is easy in case of find doc using id
  //  const user=await UserModel.findOne({_id:uid})

//update a user by id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    const modifiedUser=req.body
    const uid=req.params.id;
    //find user by id and update
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new : true,runValidators:true})//{new : true} returns updated data  runValidators for run validators before updating
    //send res
    res.status(200).json({message:"user modified",payload:updatedUser})
})  

//delete a user by id
userApp.delete("/users/:id",verifyToken,async(req,res)=>{
    //get id from req params 
     const uid=req.params.id
     let deleteduser=await UserModel.findByIdAndDelete(uid)
     //find and delete
     if(!deleteduser){
        return res.status(404).json({message:"User not found"})
     }
    res.status(200).json({message:"user deleted",payload:deleteduser})

})

//add product to cart
userApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
    //get product id from url param
    let productId=req.params.pid;
    //get current user details
    const userEmail=req.user?.email
    //if user not found
    if(!userEmail)
        return res.status(404).json({message:"User not found!!!"})
    //add product to user cart
    let result=await UserModel.findOneAndUpdate({email:userEmail},{$addToSet:{cart:{product:productId}}}, {new:true});
    console.log(result)
    res.status(200).json({message:"product added to cart"})
})

//add product to cart and increment count
userApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
    //get product id from url param
    let productId=req.params.pid;
    //get current user details
    const userEmail=req.user?.email
    //if user not found
    if(!userEmail)
        return res.status(404).json({message:"User not found!!!"})
    //add product to user cart
    //if product already there them increment count
    console.log("nnn",cart.product.productId)
    if(productId===cart.product.productId)
    {
           await UserModel.findOneAndUpdate({email:userEmail},{$set:{cart:{count:count+1}}})
           res.status(200).json({message:"product count increased"})
    }
    let result=await UserModel.findOneAndUpdate({email:userEmail},{$addToSet:{cart:{productObj:productId}}}, {new:true});
    console.log(result)
    return res.status(200).json({message:"product added to cart"})
})