import { Router } from "express";
import { auth, roleAuth } from "../middlewares/middleware";
import { role } from "../types/types";
import { createProject, getProject } from "../controllers/projectController";

const projectRouter: Router = Router();

projectRouter.use(auth);
projectRouter.post("/", roleAuth(role.CLIENT), createProject);
projectRouter.get("/", getProject);

export default projectRouter;
