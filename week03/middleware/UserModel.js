import { Schema,model } from "mongoose"


//create cart schema { product, count }
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"//name of the product model not collection
    },
    count:{
        type:Number,
        default:1
    }
})

//Create user SCHEMA
const UserSchema=new Schema({
    //structure of User resource  (username,password,email,age) 
    username:{
        type:String,
        required:[true,"Username is required"],//validator
        minLength:[2,"Min length is 4 chars"],//validator
        maxLength:[5,"Max length is 10 chars"],//validator
        unique:[true,"Exixting"]
    },
    password:{
        type:String,
        required:[true,"password is must"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email already exxisted"]//not a valudator it's a choice
        //changes cheyaradhu malli
    },
    age:{
        type:Number
    },
    cart:[cartSchema]  //{product:"",count:}
}//,{
//     versionKey:false,
//     timestamps:true,
// },
);

//generate usermodel
export const UserModel = model("user",UserSchema)


