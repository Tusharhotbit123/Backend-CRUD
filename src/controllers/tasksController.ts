import { Request, Response } from "express-serve-static-core";
import { List } from "../utils/tasks/listType";
import { taskList } from "../utils/tasks/taskList";

export const getTasks = (req: Request, res: Response) => {
  res.json(taskList);
};

export const createTasks = (req: Request, res: Response) => {
  const { title, status } = req.body;

  const newObj: List = {
    id: taskList.length + 1,
    title: title,
    status: status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  taskList.push(newObj);

  res.json(taskList);
};
