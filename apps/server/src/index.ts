import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { config } from "./config/config";
import CheckError from "./lib/checkError";
import corsOptions from "./lib/corsConfig";
import limiter from "./lib/rateLimitConfig";
import errorHandler from "./middlewares/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import uploadRoutes from './routes/uploadRoutes';
import userRoutes from "./routes/userRoutes";


const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(limiter);

app.use("/api/v0.1/auth", authRoutes);
app.use("/api/v0.1/upload", uploadRoutes);
app.use("/api/v0.1", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new CheckError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`);
});

export default app;
