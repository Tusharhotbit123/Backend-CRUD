import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  name: String;
  email: String;
  password: String;
}

const userSchema = new Schema<User>({
  name: String,
  email: String,
  password: String,
});

export default mongoose.model<User>("User", userSchema);
