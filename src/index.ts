import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.port || 5000;



app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
