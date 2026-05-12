import exp from 'express'
export const empApp=exp.Router()
import { empModel } from '../model/empModel.js'

empApp.get('/employee',async(req,res)=>{
    //get emp details from req
    let empObj=req.user;
    //read all emp from db
    let empList= await empModel.find()
    //send res
    res.status(200).json({message:"users are",payload:empList})
})

empApp.post('/employee',async(req,res)=>{
    try{
  //get new emp obj from req
    const newEmp=req.body
    console.log("newEmp: ",newEmp)
    //create new user doc
    const newEmpDocument=new empModel(newEmp)
    //save
    const result = await newEmpDocument.save()
    console.log(result)
    //send res
    res.status(201).json({message: "emp created"})
    }catch (err) {
    res.status(400).json({ reason: err.message });
  }

})

empApp.put('/employee/:id',async(req,res)=>{
    //get modified data
    const modifiedEmp=req.body
    const empid=req.params.id
    //find emp by id
    const updatedemp=await empModel.findByIdAndUpdate(empid,{$set:{...modifiedEmp}},{new:true})
    if(!updatedemp)
      return res.status(200).json({message:"emp not found"})
    res.status(200).json({message:"emp modified",payload:updatedemp})
})

empApp.delete('/employee/:id',async(req,res)=>{
    const empid=req.params.id
    let deletedemp=await empModel.findByIdAndDelete(empid)
     //find and delete
     if(!deletedemp){
        return res.status(404).json({message:"emp not found"})
     }
    res.status(200).json({message:"emp deleted",payload:deletedemp})
})