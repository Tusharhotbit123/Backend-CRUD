import { Request, Response, NextFunction as Next } from "express";
import jwt from "jsonwebtoken";

const Authentication = (req: Request, res: Response, next: Next) => {
  const token = req.header("token");

  if (!token) {
    res
      .status(400)
      .json({ message: "Unauthorised access! Please login first" });
    return;
  }

   try{
     const secretKey=process.env.SECRET_KEY||""
     const decoded=jwt.verify(token,secretKey)
     next();


   }catch(err){
     res.status(400).json({message:"Invalid or expired token!"})
   }
};

export default Authentication;
