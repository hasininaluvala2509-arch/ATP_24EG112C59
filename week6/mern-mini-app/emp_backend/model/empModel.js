import { Schema,model,Types } from "mongoose";

const EmpSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:true
    },
    mobile:{
        type: String, // store as string to enforce length
        required: [true, "Mobile number required"],
        minlength: [10, "Number must be of 10 digits"],
        maxlength: [10, "Number must be of 10 digits"]
    },
    designation:{
        type:String,
        required:[true,"Designation is required"]
    }, 
    companyName:{
        type:String,
        required:[true,"Company name required"]
    }
})
export const empModel=model("emp",EmpSchema)