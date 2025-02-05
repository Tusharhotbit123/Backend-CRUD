import { Request, Response } from "express";
import taskServices from "../services/taskServices";
import IUser from "../types/user";

class taskControllers {
  static async getTasks(req: Request, res: Response) {
    const user = req.user as IUser;

    try {
      const tasks = await taskServices.findTasks(user.id);

      res
        .status(200)
        .json({ message: "Following is the list of tasks", tasks });
    } catch (err) {
      const error = err as Error;
      res
        .status(500)
        .json({ message: "Interval server error!", error: error.message });
    }
  }

  static async createTask(req: Request, res: Response) {
    try {
      const user = req.user as IUser;
      const { title, status } = req.body;

      if (!title || !status) {
        res.status(400).json({ message: "Please provide valid credentials!" });
        return;
      }

      const task = await taskServices.createTask(title, status, user.id);

      res
        .status(200)
        .json({ message: "The task creation was successful!", task });
    } catch (err) {
      const error = err as Error;
      res
        .status(500)
        .json({ message: "Interval server error!", error: error.message });
    }
  }
  static async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, status } = req.body;

      if (!title || !status) {
        res.status(400).json({ message: "Please provide valid credentials!" });
        return;
      }

      const updatedTask = await taskServices.updateTask(title, status, id);

      res.status(200).json({
        message: "The task has been successfully updated!",
        updatedTask,
      });
    } catch (err) {
      const error = err as Error;
      res
        .status(500)
        .json({ message: "Internal server error!", error: error.message });
    }
  }

  static async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedTask = await taskServices.deleteTask(id);

      res.status(200).json({
        message: "The task has been successfully deleted!",
        deletedTask,
      });
    } catch (err) {
      const error = err as Error;
      res
        .status(500)
        .json({ message: "Interval server error!", error: error.message });
    }
  }
}

export default taskControllers;
