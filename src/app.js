import express from "express";
import morgan from "morgan";
import authRoutes from "../src/routes/auth.routes.js";

const app = express();

//me permite ver las peticiones que llegan al servidor
app.use(morgan("dev"));
app.use(express.json());

app.use("/api",authRoutes);

export default app;
