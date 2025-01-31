import { Request, Response } from "express-serve-static-core";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import Task from "../services/models/taskModel";

interface CustomJwtPayload extends jwt.JwtPayload {
  id: string;
}

export const getTasks = async (req: Request, res: Response) => {
  try {
    const token=req.header("token")||""
    
    const secretKey=process.env.SECRET_KEY||""

    const id=jwt.verify(token,secretKey) as CustomJwtPayload

    const tasks = await Task.find({user:id});

    if (!tasks) {
      res.status(200).json({ message: "There are no tasks!" });
      return;
    }

    res.status(200).json({ message: "Following is the list of tasks:", tasks });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!", err });
  }
};

export const createTasks = async (req: Request, res: Response) => {
  try {

    const token=req.header("token") as string
    const secretKey=process.env.SECRET_KEY as string
    const decoded=jwt.verify(token,secretKey) as CustomJwtPayload
  
    const { title, status } = req.body;

    if (!title || !status) {
      res
        .status(400)
        .json({ message: "Invalid task!,please check the details" });

      return;
    }

    const newTask = new Task({
      title: title,
      status: status,
      createdAt: new Date(),
      updatedAt: new Date(),
      user:decoded.id
    });

    await newTask.save();

    res
      .status(200)
      .json({ message: "New task successfully created!", newTask });
  } catch (err) {
    res.status(500).json({ message: "Some unexpected error occured", err });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;

    if (!id) {
      res.status(400).send({ message: "Please provide a valid id!" });
      return;
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, status, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedTask) {
      res.status(400).json({ message: "Task not found!" });
      return;
    }

    res.status(200).json({
      message: "The given task has been successfully updated",
      updatedTask,
    });
  } catch (err) {
    res.status(500).json({ message: "Some unexpected error occured", err });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Please check for valid id!" });
      return;
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      res.status(400).json({ message: "Task not found!" });
      return;
    }

    res
      .status(200)
      .json({ message: "The task has been successfully deleted!" });
  } catch (err) {
    res.status(500).json({ message: "Some unexpected error occured", err });
  }
};
