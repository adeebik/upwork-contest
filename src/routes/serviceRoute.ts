import { Router } from "express";
import { auth, roleAuth } from "../middlewares/middleware";
import { role } from "../types/types";
import { createService } from "../controllers/serviceController";

const serviceRouter: Router = Router();

serviceRouter.use(auth);

serviceRouter.post("/", roleAuth(role.FREELANCER), createService);

export default serviceRouter;
