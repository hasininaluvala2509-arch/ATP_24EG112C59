import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const {verify} = jwt;
export const verifyToken = ( ...allowedRoles)=>{
    
    return (req,res,next)=>{
        // token verification logic
    // Check cookie first, then Authorization header as fallback
    // (cross-domain cookies are blocked by modern browsers)
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    console.log("Token source:", req.cookies?.token ? "cookie" : req.headers.authorization ? "header" : "none");
    // if token is not valid
    if(!token){
        return res.status(401).json({message:"please login"});
    }
    // there is a token and we should verify it
    try{
        const decodedToken = verify(token,process.env.KEY);
        
        // check the role is same as the decoded token role
        if(!allowedRoles.includes(decodedToken.role)){
            return res.status(403).json({message:"you are not authorized"})
        }
        req.user=decodedToken;

        next();
    }
    catch(err){
        res.status(401).json({message:"Session expired : Re-Login"})
    }
    }
}