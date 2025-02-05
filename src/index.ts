import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

const port = process.env.PORT || 5000;

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
