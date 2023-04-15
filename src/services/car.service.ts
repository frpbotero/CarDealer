import CarRepository from "../repositories/car.repository";
import { Car } from "../models/car.model";

class CarService {
  getAll() {
    return CarRepository.getAll();
  }
  getById(id: string) {
    return CarRepository.getByID(id);
  }
  create(body: typeof Car) {
    return CarRepository.create(body);
  }
  delete(id: string) {
    return CarRepository.deleteByID(id);
  }
  update(id: string, body: Partial<typeof Car>) {
    return CarRepository.updateByID(id, body);
  }
}
export default new CarService();
