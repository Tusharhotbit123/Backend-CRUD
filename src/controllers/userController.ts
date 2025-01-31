import { Request, Response } from "express-serve-static-core";
import dotenv from "dotenv";
import User from "../services/models/userModel";
import jwt from "jsonwebtoken";

dotenv.config();

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .json({ message: "Please provide valid signup credentials" });
      return;
    }

    let user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ message: "User already exists! Please login" });
      return;
    }

    user = new User({ name, email, password });

    await user.save();

    res
      .status(200)
      .json({ message: "The user has been successfully created!" });
  } catch (err) {
    res.status(500).json({ message: "An error has been identified", err });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Please provide  valid credentials!" });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res
        .status(400)
        .json({ message: "The user doesnot exist! Please signup" });
      return;
    }

    const secretKey = process.env.SECRET_KEY || "";

    const token = jwt.sign({ id: user._id }, secretKey);

    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    res.status(500).json({ message: "An error has been identified", err });
  }
};
