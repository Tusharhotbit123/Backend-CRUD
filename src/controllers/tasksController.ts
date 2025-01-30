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

export const updateTask = (req: Request, res: Response) => {
  const {id}=req.params
  const {title, status } = req.body;

  const obj: List | undefined = taskList.find(item=>item.id===Number(id));

  if (obj) {
    obj.title = title;
    obj.status = status;
    obj.updatedAt = new Date();
  }

  res.json({
    message: "the task has been successfully updated",
    obj,
    taskList,
  });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;

  const numericId=Number(id)

  const idx = taskList.findIndex(item=>item.id===numericId);

  taskList.splice(idx, 1);

  res.json({ message: "the task has been deleted successfully", taskList });
};
