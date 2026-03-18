import { Router } from "express";
import { auth, roleAuth } from "../middlewares/middleware";
import { role } from "../types/types";
import {
  approveMilestone,
  submitMilestone,
} from "../controllers/milestoneController";

const milestoneRouter: Router = Router();

milestoneRouter.use(auth);
milestoneRouter.put(
  "/:milestoneId/submit",
  roleAuth(role.FREELANCER),
  submitMilestone,
);

milestoneRouter.put(
  "/:milestoneId/approve",
  roleAuth(role.CLIENT),
  approveMilestone,
);

export default milestoneRouter;
