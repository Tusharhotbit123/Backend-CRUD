import { Request, Response } from "express-serve-static-core";
import { List } from "../utils/tasks/listType";
import { taskList } from "../utils/tasks/taskList";

export const getTasks = (req: Request, res: Response) => {
  res.status(200).json(taskList);
};

export const createTasks = (req: Request, res: Response) => {
  const { title, status } = req.body;

  if (!title || !status) {
    res
      .status(400)
      .json({ message: "Invalid request!,please check the details" });

    return;
  }

  const newObj: List = {
    id: taskList.length + 1,
    title: title,
    status: status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  taskList.push(newObj);

  res.status(200).json(taskList);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, status } = req.body;

  if (!id) {
    res.status(400).send({ message: "Please provide a valid id!" });
    return;
  }

  const obj: List | undefined = taskList.find((item) => item.id === Number(id));

  if (!obj) {
    res
      .status(500)
      .json({ message: "There is no given task as such for update!" });

    return;
  }

  if (obj) {
    obj.title = title;
    obj.status = status;
    obj.updatedAt = new Date();
  }

  res.status(200).json({
    message: "the task has been successfully updated",
    obj,
    taskList,
  });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Please check for valid id!" });
    return;
  }

  const numericId = Number(id);

  const idx = taskList.findIndex((item) => item.id === numericId);

  if (!idx) {
    res.status(500).json({ message: "There is no task with the given id!" });
    return;
  }

  taskList.splice(idx, 1);

  res
    .status(200)
    .json({ message: "the task has been deleted successfully", taskList });
};
