import { Car, ICar } from "../models/car.model";

class CarRespository {
  getAll() {
    return Car.find();
  }
  getByID(id: string) {
    return Car.findOne({ _id: id });
  }
  getByPlate(plate: string) {
    return Car.findOne({ plate });
  }
  updateById(id: string, body: Partial<ICar>) {
    return Car.updateOne({ _id: id }, { $set: body });
  }
  create(body: ICar) {
    return Car.create(body);
  }
  deleteById(id: string) {
    return Car.deleteOne({ _id: id });
  }
}

export default new CarRespository();
