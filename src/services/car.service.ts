import CarRepository from "../repositories/car.repository";
import { ICar } from "../models/car.model";
import { validateCreateCar, validateUpdateCar } from "../utils/cars.schema";

class CarService {
  getAll() {
    return CarRepository.getAll();
  }
  getById(id: string) {
    return CarRepository.getByID(id);
  }
  async create(body: ICar) {
    const { error, value } = validateCreateCar(body);
    if (error) throw new Error(error.message);
    const car = await CarRepository.getByPlate(body.plate);
    if (car) throw new Error("Carro já cadastrado!");
    return CarRepository.create(body);
  }
  delete(id: string) {
    return CarRepository.deleteById(id);
  }
  update(id: string, body: Partial<ICar>) {
    const { error, value } = validateUpdateCar(body);
    if (error) throw new Error(error.message);
    return CarRepository.updateById(id, body);
  }
}
export default new CarService();
