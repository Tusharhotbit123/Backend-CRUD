import { Request, Response, NextFunction as Next } from "express";
export const Authentication = (req: Request, res: Response, next: Next) => {
  const token = req.headers.token;

  if (!token) {
    res.status(400).json({message:"Unauthorised access! Please login first"})
    return
  }

  next()
};
