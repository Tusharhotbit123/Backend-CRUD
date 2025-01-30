import { Router } from "express";
import { getTasks } from "../controllers/tasksController";
const router = Router();

router.get("/tasks",getTasks);

export default router;
