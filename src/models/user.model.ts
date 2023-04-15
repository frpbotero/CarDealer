import mongoose, { Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  CPF: string;
  password: string;
}

export const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  CPF: { type: String, require: true },
  password: { type: String, require: true },
});

export const User = mongoose.model<IUser>("User", UserSchema);
