import express from "express";
import dotenv from "dotenv";
import connection from "./config/connection";
import  authentication  from "./middlewares/Authentication";
import taskRoutes from "./routes/taskRoutes";
import userRoutes from "./routes/userRoutes";


dotenv.config();
const app = express();
app.use(express.json());

connection();

app.use("/api", userRoutes);
app.use("/api",authentication,taskRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
