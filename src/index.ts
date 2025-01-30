import express, { Request, Response, NextFunction as Next } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/taskRoutes";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
