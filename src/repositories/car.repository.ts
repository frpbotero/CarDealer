import { Car } from "../models/car.model";

class CarRespository {
  getAll() {
    return Car.find();
  }
  getByID(id: string) {
    return Car.findOne({ id });
  }
  updateByID(id: string, body: Partial<typeof Car>) {
    return Car.updateOne({ id }, { $set: body });
  }
  create(body: typeof Car) {
    return Car.create(body);
  }
  deleteByID(id: string) {
    return Car.deleteOne({ id });
  }
}

export default new CarRespository();
