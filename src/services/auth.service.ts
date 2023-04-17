import UserRepository from "../repositories/user.repository";
import { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY || "";

class AuthService {
  async auth(email: string, password: string) {
    const user = await UserRepository.getByEmail(email);

    if (!user) throw new Error("Usuário não encontrado!");

    try {
      const result = await bcrypt.compare(password, user.password);

      if (!result) {
        throw new Error("Falha na autenticação!");
      }
      return jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    } catch {
      throw new Error("Falha na autenticação!");
    }
  }
  async recovery(email: string) {
    const user = await UserRepository.getByEmail(email);
    if (user) return user.question;
    throw new Error("Usuário não encontrado!");
  }
  async resetPass(body: Partial<IUser>) {
    if (!body.email || !body.answer || !body.password) {
      throw new Error("Falha na autenticação!");
    }

    const user = await UserRepository.getByEmail(body.email);

    if (!user) {
      throw new Error("Falha na autenticação!");
    }

    if (body.answer !== user.answer) {
      throw new Error("Falha na autenticação!");
    }

    body.password = await bcrypt.hash(body.password, 10);

    return UserRepository.updateById(user.id, body);
  }
}

export default new AuthService();
