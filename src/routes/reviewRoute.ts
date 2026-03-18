import { Router } from "express";
import { auth } from "../middlewares/middleware";
import { submitReview } from "../controllers/reviewController";

const reviewRouter: Router = Router();

reviewRouter.use(auth);
reviewRouter.post("/", submitReview);

export default reviewRouter;
