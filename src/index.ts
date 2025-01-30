import express, { Request, Response,NextFunction as Next } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get('/',(req:Request,res:Response)=>{
     
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
