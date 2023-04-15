import UserRepository from "../repositories/user.repository";
import { User } from "../models/user.model";

class UserService {
  getAll() {
    return UserRepository.getAll();
  }
  getById(id: string) {
    return UserRepository.getByID(id);
  }
  createUser(body: typeof User) {
    return UserRepository.create(body);
  }
  deleteUser(id: string) {
    return UserRepository.deleteByID(id);
  }
  updateUser(id: string, body: Partial<typeof User>) {
    return UserRepository.updateByID(id, body);
  }
}
export default new UserService();
