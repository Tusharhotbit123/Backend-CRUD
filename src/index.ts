import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/taskRoutes";
import connection from "./config/connection";

dotenv.config();
const app = express();
app.use(express.json());

connection();

app.use("/", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
