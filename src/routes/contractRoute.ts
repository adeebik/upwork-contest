import { Router } from "express";
import { auth } from "../middlewares/middleware";
import { getContracts } from "../controllers/contractController";

const contractRouter : Router = Router()

contractRouter.use(auth);
contractRouter.get("/api/contracts", getContracts)

export default contractRouter