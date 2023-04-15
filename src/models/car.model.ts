import mongoose, { Schema } from "mongoose";

export interface ICar {
  plate: string;
  model: string;
  year: number;
  brand: string;
  color: string;
  buyValue: number;
}
export const CarSchema = new Schema({
  plate: { type: String, require: true },
  model: { type: String, require: true },
  year: { type: Number, require: true },
  brand: { type: String, require: true },
  color: { type: String, require: true },
  buyValue: { type: Number, require: true },
});

export const Car = mongoose.model<ICar>("Car", CarSchema);
