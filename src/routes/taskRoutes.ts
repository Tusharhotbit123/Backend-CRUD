import { Router } from "express";
import {
  createTasks,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasksController";
const router = Router();

router.get("/tasks", getTasks);
router.post("/createtasks", createTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
export default router;
