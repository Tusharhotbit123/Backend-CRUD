import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authenticateJWT from "./middlewares/authMiddleware";
import userRoutes from "./routes/userRoutes";
import taskRoutes from "./routes/taskRoutes"

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

const port = process.env.PORT || 5000;

app.use("/api", userRoutes);
app.use("/api/tasks",authenticateJWT,taskRoutes)

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
