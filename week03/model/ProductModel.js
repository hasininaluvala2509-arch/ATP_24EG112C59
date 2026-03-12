import { Schema,model } from "mongoose"

const ProductSchema=new Schema({
productId:{
    type:String,
    required:[true,"ProductId is must"]
},
productName:{
    type:String,
    required:[true,"ProductName is required"]
},
price:{
    type:Number,
    required:[true,"Price is required"],
    min:[10000,"Min Price is 10000"],
    max:[50000,"max price is 50000"]  
},
brand:{
    type:String,
    required:true
},
})
export const ProductModel = model("product",ProductSchema)





// Create Product REST API with below features
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)
