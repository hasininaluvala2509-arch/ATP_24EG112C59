import jwt from "jsonwebtoken"
const {verify} =jwt

export function verifyToken(req,res,next){
    //token verification logic
//console.log("token object is ",req.cookies.token)
const token=req.cookies?.token
//if req from unauthorised user
if(!token)
    return res.status(401).json({message:"plz login"})
//if token is existed
try{
const decodedToken=verify(token,"abcdef")
console.log(decodedToken)
//attach decoded token to user 
req.user=decodedToken;
    //call next
    next();
}
catch(err){
    res.status(401).json({message:"Session expired , plz relogin to continue"})
}

}//to check verified token

//app.use(verifyToken)--> execute for every route
//so userApp.get(path,verifyToken,req-handler)