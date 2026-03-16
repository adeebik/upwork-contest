import express, { Request, Response } from "express";
import authRouter from "./routes/authRoute";
import serviceRouter from "./routes/serviceRoute";
import projectRouter from "./routes/projectRoute";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/services", serviceRouter);
app.use("/api/projects", projectRouter);

app.listen(3000);
