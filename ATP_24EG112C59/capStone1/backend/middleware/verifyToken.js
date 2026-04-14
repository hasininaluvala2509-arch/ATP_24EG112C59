import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const {verify} = jwt
config()

export const verifyToken=(...allowedRoles)=>{//verifyToken("Author","User","Admin")
    return (req,res,next)=>{
          try{ //get token from cookie
    const token=req.cookies?.token//without cookie parser cookie is undefined (here token is token's name we have named in commonapi res())
    //req.cookie contain obj
    //check token existance
    if(!token)
        return res.status(401).json({message:"Please login first"})//401  unauthorised
    //validate token(decode the token)
//verify throws error if no token
    let decodedToken=verify(token,process.env.SECRET_KEY);
    //check the role is same as role in decoded token
    if(!allowedRoles.includes(decodedToken.role)){
        return res.status(403).json({message:"Your not authorised"})
    }
    //add decoded token
    req.user=decodedToken;
    next();
   }
catch(err){
    res.status(401).json({message:"Invalid token"})
}

    }
}


// export const VerifyToken=async(req,res,next)=>{
//    try{ //get token from cookie
//     const token=req.cookies?.token//without cookie parser cookie is undefined (here token is token's name we have named in commonapi res())
//     //req.cookie contain obj
//     //check token existance
//     if(!token)
//         return res.status(401).json({message:"Please login first"})//401  unauthorised
//     //validate token(decode the token)
// //verify throws error if no token
//     let decodedToken=verify(token,process.env.SECRET_KEY);
//     //check the role is same as role in decoded token
//     //add decoded token
//     res.user=decodedToken;
//     next();
//    }
// catch(err){
//     res.status(401).json({message:"Invalid token"})
// }

// }