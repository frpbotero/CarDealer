import mongoose, { Schema } from "mongoose";
import moment from "moment";

export interface IUser {
  name: string;
  email: string;
  CPF: string;
  password: string;
  createdAt: string | Date;
}

export const UserSchema = new Schema<IUser>({
  name: { type: String, require: true },
  email: { type: String, require: true },
  CPF: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: {
    type: String,
    default: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
  },
});

export const User = mongoose.model<IUser>("User", UserSchema);
