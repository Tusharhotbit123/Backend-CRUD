import { Router } from "express";
import { createTasks, getTasks } from "../controllers/tasksController";
const router = Router();

router.get("/tasks", getTasks);
router.post("/createtasks", createTasks);

export default router;
