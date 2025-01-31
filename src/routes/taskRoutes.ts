import { Router } from "express";
import {
  createTasks,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasksController";
const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks/createtask", createTasks);
router.put("/tasks/update/:id", updateTask);
router.delete("/tasks/delete/:id", deleteTask);
export default router;
