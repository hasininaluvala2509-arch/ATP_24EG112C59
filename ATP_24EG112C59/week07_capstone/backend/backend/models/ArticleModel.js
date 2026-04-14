import {Schema,model,Types} from 'mongoose'

const CommentSchema=new Schema({
    user:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"User ID required"]
    },
    comment:{
        type:String,
        required:[true,"Enter Comment"]
    }
})
const ArticleSchema=new Schema({
    author:{
        type:Types.ObjectId,//ObjId->(ObjectId('ohukjbvad34590u3i')) nd string->(hkjsdf89) not same
        ref:"user",
        required:[true,"Author id is required"]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"] 
    },
    content:{
        type:String,
        required:[true,"Content is required"]
    },
    comments:[{ type:CommentSchema,default:[]}],//{comment:"" , user(who posted comment):""}
    isArticleActive:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"//if error occur this throws the error
})

//create Article model
export const ArticleModel=model("article",ArticleSchema);