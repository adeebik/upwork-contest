import express from "express";
import authRouter from "./routes/authRoute";
import serviceRouter from "./routes/serviceRoute";
import projectRouter from "./routes/projectRoute";
import contractRouter from "./routes/contractRoute";
import proposalRouter from "./routes/proposalRoute";
import milestoneRouter from "./routes/milestonesRoute";
import reviewRouter from "./routes/reviewRoute";

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/services", serviceRouter);
app.use("/api/projects", projectRouter);
app.use("/api/proposals", proposalRouter);
app.use("/api/contracts", contractRouter);
app.use("/api/milestones", milestoneRouter);
app.use("/api/reviews", reviewRouter);

app.listen(3000);
