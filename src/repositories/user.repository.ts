import { User, IUser } from "../models/user.model";

class UserRespository {
  getAll() {
    return User.find();
  }
  getById(id: string) {
    return User.findOne({ _id: id });
  }
  getByEmail(email: string) {
    return User.findOne({ email });
  }
  updateById(id: string, body: Partial<IUser>) {
    return User.updateOne({ _id: id }, { $set: body });
  }
  create(body: IUser) {
    return User.create(body);
  }
  deleteById(id: string) {
    return User.deleteOne({ _id: id });
  }
}

export default new UserRespository();
