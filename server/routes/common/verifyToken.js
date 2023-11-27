require('dotenv').config();
const jwt=require('jsonwebtoken')

module.exports = function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization'];
    //console.log(req.headers['authorization']);
    if(typeof bearerHeader !== 'undefined'){
      const bearer=bearerHeader.split(" ");
      const token=bearer[1];
      req.token=token;
      jwt.verify(req.token,process.env.JWT_SECRET_KEY,(err,authData)=>{
        if(err){
            r={
                status:false,
                message:"Token is invalid or expired."
            }
            res.send(r);
        }else{
            next();
        }
      })
      //next();
    }else{
      r={
        status:false,
        message:'Token is not available.'
      }
      res.send(r);
    }   
  }

  