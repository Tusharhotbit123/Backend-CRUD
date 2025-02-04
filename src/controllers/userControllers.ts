import { Request, Response } from "express";
import userService from "../services/userServices";

class userController {
  static async signUp(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Please provide valid credentials!" });
      return;
    }

    try {
      const user = await userService.createUser(name, email, password);
      res
        .status(200)
        .json({ message: "The user signup was successful!", user });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error",err });
    }
  }

  static async signIn(req:Request,res:Response){


    const {email,password}=req.body;

    if(!email||!password){
         res.status(400).json({message:"Login failed! please provide valid credentials"});
         return;
    }

    try{
       
        
        

    }catch(err){
        res.status(500).json({message:"Internal Server Error",err});
    }

  }

}

export default userController;
