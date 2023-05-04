import Joi from "joi";
import { ICar } from "../models/car.model";

const validator =
  (schema: Joi.ObjectSchema<ICar>) => (requestBody: Partial<ICar>) =>
    schema.validate(requestBody);

const createCarSchema = Joi.object({
  plate: Joi.string().min(7).max(7).required().messages({
    "string.min": "Favor informar apenas os caracteres",
    "string.max": "Favor informar apenas os caracteres",
  }),
  model: Joi.string().required(),
  year: Joi.string().min(4).required(),
  brand: Joi.string().min(3).required(),
  color: Joi.string().required(),
  buyValue: Joi.number().required(),
});
const updateCarSchema = Joi.object({
  plate: Joi.forbidden(),
  model: Joi.string(),
  year: Joi.string().min(4),
  brand: Joi.string().min(3),
  color: Joi.string(),
  buyValue: Joi.number(),
});
export const validateCreateCar = validator(createCarSchema);
export const validateUpdateCar = validator(updateCarSchema);
