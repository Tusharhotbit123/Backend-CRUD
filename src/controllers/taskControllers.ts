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

  static async createTask() {}
  static async updateTask() {}

  static async deleteTask() {}
}

export default taskControllers;
