import UserRepository from "../repositories/user.repository";
import { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import { validarCPF } from "../utils/validaCPF.utils";

class UserService {
  getAll() {
    return UserRepository.getAll();
  }
  getById(id: string) {
    return UserRepository.getById(id);
  }
  async createUser(body: IUser) {
    const user = await UserRepository.getByEmail(body.email);
    if (user) throw new Error("Usuário já cadastrado!");
    body.question = body.question.toUpperCase();
    body.answer = body.answer.toUpperCase();
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    if (validarCPF(body.CPF) == false) {
      throw new Error("CPF inválido!");
    }
    return UserRepository.create(body);
  }

  deleteUser(id: string) {
    return UserRepository.deleteById(id);
  }
  async updateUser(id: string, body: Partial<IUser>) {
    //Se o campo de atualização for password, favoor criptografar
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    return UserRepository.updateById(id, body);
  }
}
export default new UserService();
