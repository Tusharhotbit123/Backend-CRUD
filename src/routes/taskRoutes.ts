import taskControllers from "../controllers/taskControllers";
import { Router } from "express";

const router = Router();

router.get("/", taskControllers.getTasks);
router.post("/create", taskControllers.createTask);
router.post("/update/:id", taskControllers.updateTask);
router.post("/delete/:id", taskControllers.deleteTask);

export default router;
