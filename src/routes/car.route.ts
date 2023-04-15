import { Request, Response, Router } from "express";
import CarService from "../services/car.service";

const carRouter = Router();

carRouter.get("/", async (req: Request, res: Response) => {
  const cars = await CarService.getAll();
  res.status(200).send(cars);
});
carRouter.get("/:id", async (req: Request, res: Response) => {
  const car = await CarService.getById(req.params.id);
  if (!car) {
    return res.status(404).send({ message: "Carro não encontrado!" });
  }
  res.status(200).send(car);
});
carRouter.post("/", async (req: Request, res: Response) => {
  try {
    await CarService.create(req.body);
    res.status(201).send({ message: "Carro criado com sucesso!" });
  } catch {
    res.status(400).send({
      message: "Aconteceu algo, favor verificar as informações enviadas.",
    });
  }
  carRouter.put("/:id", async (req: Request, res: Response) => {
    try {
      await CarService.update(req.params.id, req.body);
      res.status(200).send({ message: "Carro atualizado com sucesso!" });
    } catch {
      res.status(400).send({
        messsage: "Aconteceu algo, favor verificar as informações enviadas.",
      });
    }
  });
  carRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      await CarService.delete(req.params.id);
      res.status(200).send({ message: "Carro excluído com sucesso!" });
    } catch {
      res.status(400).send({
        message: "Aconteceu algo, favor verificar as informações enviadas.",
      });
    }
  });
});

export default carRouter;
