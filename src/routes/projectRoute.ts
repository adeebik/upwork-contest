import { Router } from "express";
import { auth, roleAuth } from "../middlewares/middleware";
import { role } from "../types/types";
import {
  createProject,
  getProject,
  getProposal,
  submitProposal,
} from "../controllers/projectController";

const projectRouter: Router = Router();

projectRouter.use(auth);
projectRouter.post("/", roleAuth(role.CLIENT), createProject);
projectRouter.get("/", getProject);
projectRouter.post("/:projectId/proposals", roleAuth(role.FREELANCER), submitProposal);
projectRouter.get("/:projectId/proposals", roleAuth(role.CLIENT), getProposal);

export default projectRouter;
