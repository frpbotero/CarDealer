import CarRepository from "../repositories/car.repository";
import { ICar } from "../models/car.model";

class CarService {
  getAll() {
    return CarRepository.getAll();
  }
  getById(id: string) {
    return CarRepository.getByID(id);
  }
  async create(body: ICar) {
    const car = await CarRepository.getByPlate(body.plate);
    if (car) throw new Error("Carro já cadastrado!");
    return CarRepository.create(body);
  }
  delete(id: string) {
    return CarRepository.deleteById(id);
  }
  update(id: string, body: Partial<ICar>) {
    return CarRepository.updateById(id, body);
  }
}
export default new CarService();
