import express from "express";
import morgan from "morgan";
import authRoutes from "../src/routes/auth.routes.js";
import salesRoutes from "../src/routes/sales.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
//me permite ver las peticiones que llegan al servidor
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", salesRoutes);

export default app;
