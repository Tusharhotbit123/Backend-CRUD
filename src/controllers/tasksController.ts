import { Request, Response } from "express-serve-static-core";
import { list } from "../utils/tasks/taskList";

export const getTasks = (req: Request, res: Response) => {
  res.json(list);
};
