import Joi from "joi";
import { IUser } from "../models/user.model";

const validator =
  (schema: Joi.ObjectSchema<IUser>) => (requestBody: Partial<IUser>) =>
    schema.validate(requestBody);

const createUserSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  question: Joi.string().min(5).required(),
  answer: Joi.string().min(4).required(),
  CPF: Joi.string().min(11).max(11).required().messages({
    "string.min": "Favor informar apenas 11 caracteres no formato XXXXXXXXXXX",
    "string.max": "Favor informar apenas 11 caracteres no formato XXXXXXXXXXX",
  }),
  password: Joi.string().min(6).max(12).required(),
});
const updateUserSchema = Joi.object({
  name: Joi.string().min(4),
  email: Joi.string().forbidden(),
  question: Joi.string().min(5),
  answer: Joi.string().min(4),
  CPF: Joi.string().forbidden(),
  password: Joi.string().min(6).max(12),
});
export const ValidateCreateUser = validator(createUserSchema);
export const ValidateUpdateUser = validator(updateUserSchema);
