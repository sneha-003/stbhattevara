const jwt=require("jsonwebtoken")
require('dotenv').config()

const verifyToken = (req,res,next)=>{

    const bearerToken= req.headers.authorization;
    if(bearerToken===undefined)
        {
            res.status(400).json({msg:"unauthorized access login first"});
        }
    else
    {
        const token = bearerToken.split(" ")[1]
        try
        {
            jwt.verify(token,process.env.SECRET_KEY)
            next()
        }
        catch(err){
            next(new Error("Session expired ..pls relogin to continue"))
        }   
    }
}

module.exports=verifyToken;