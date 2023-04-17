import mongoose, { Schema } from "mongoose";
import moment from "moment";
export interface ICar {
  plate: string;
  model: string;
  year: number;
  brand: string;
  color: string;
  buyValue: number;
  createdAt: string | Date;
}
export const CarSchema = new Schema<ICar>({
  plate: { type: String, require: true },
  model: { type: String, require: true },
  year: { type: Number, require: true },
  brand: { type: String, require: true },
  color: { type: String, require: true },
  buyValue: { type: Number, require: true },
  createdAt: {
    type: String,
    default: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
  },
});

export const Car = mongoose.model<ICar>("Car", CarSchema);
