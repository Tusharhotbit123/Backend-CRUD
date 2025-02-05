import { Request,Response } from "express";
import taskControllers from "../controllers/taskControllers";
import { Router } from "express";

const router=Router()

router.get("/",taskControllers.getTasks)
router.post("/create",taskControllers.createTask)
router.post("/update",taskControllers.updateTask)
router.post("/delete",taskControllers.deleteTask)


export default router