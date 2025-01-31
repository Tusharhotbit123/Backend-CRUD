import mongoose, { Schema, Document } from "mongoose";
import User from "./userModel"

interface Task extends Document {
  title: string;
  status: "completed" | "incomplete";
  createdAt: Date;
  updatedAt: Date;
  user:mongoose.Schema.Types.ObjectId;
}

const taskSchema = new Schema<Task>({
  title: { type:String, unique: true },
  status: {
    type: String,
    enum: ["completed", "incomplete"],
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
  user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},

});

export default mongoose.model<Task>("Task", taskSchema);
