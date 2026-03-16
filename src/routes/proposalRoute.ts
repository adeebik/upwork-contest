import { Router } from "express";
import { auth, roleAuth } from "../middlewares/middleware";
import { role } from "../types/types";
import { createContract } from "../controllers/proposalController";

const proposalRouter: Router = Router();

proposalRouter.use(auth);
proposalRouter.put("/:proposalId/accept", roleAuth(role.CLIENT), createContract);

export default proposalRouter;
