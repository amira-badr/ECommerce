import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminLogin = async(req,res)=>{
  try{
    const {email , password} = req.body;
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(404).json({message: "User Not Found"});
    }   
     if(!user.isAdmin){
      return res.status(403).json({message: "User Not an Admin"});
    }
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch){
      return res.status(400).json({
        message:"Invalid Password"
      })
      const token = jwt.sign({
        id:user_id, isAdmin:user.isAdmin
      },
      process.env.JWT_SECRET, {expiresIn:"id"}
    )
    res.json({success:true , token , user:{
      name:user.name, email:user.email
    }})
    }



  }catch(err){

  }
}