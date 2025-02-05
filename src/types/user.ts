import type { Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  hash: string;
  salt: string;
  isAdmin: boolean;
}

export default IUser;