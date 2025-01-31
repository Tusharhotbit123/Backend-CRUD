import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.URI || "";

const connection = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("The database has been successfully connected"))
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

export default connection;
