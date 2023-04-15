import { User } from "../models/user.model";

class UserRespository {
  getAll() {
    return User.find();
  }
  getByID(id: string) {
    return User.findOne({ id });
  }
  updateByID(id: string, body: Partial<typeof User>) {
    return User.updateOne({ id }, { $set: body });
  }
  create(body: typeof User) {
    return User.create(body);
  }
  deleteByID(id: string) {
    return User.deleteOne({ id });
  }
}

export default new UserRespository();
