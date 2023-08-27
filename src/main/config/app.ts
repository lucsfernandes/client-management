import cors from "cors";
import express from "express";
import { v1Router } from "../../presentation/middlewares/routes";

const app = express();
app.use(express.json());

app.use(cors());

// Routes & Middlewares
// app.use("/v1/api-docs", swaggerRouter)
app.use("/v1", v1Router);

export default app;