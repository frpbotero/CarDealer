import { Request, Response, Router } from "express";
import CarService from "../services/car.service";
const ObjectId = require("mongoose").Types.ObjectId;

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const cars = await CarService.getAll();
  res.status(200).send(cars);
});
router.get("/:document", async (req: Request, res: Response) => {
  console.log(req.params.id);

  const id = new ObjectId(req.params.id);
  const car = await CarService.getById(id);
  if (!car) {
    return res.status(404).send({ message: "Carro não encontrado!" });
  }
  res.status(200).send(car);
});
router.post("/", async (req: Request, res: Response) => {
  try {
    await CarService.create(req.body);
    res.status(201).send({ message: "Carro criado com sucesso!" });
  } catch {
    res.status(400).send({
      message: "Aconteceu algo, favor verificar as informações enviadas.",
    });
  }
  router.put("/:document", async (req: Request, res: Response) => {
    try {
      await CarService.update(req.params.id, req.body);
      res.status(200).send({ message: "Carro atualizado com sucesso!" });
    } catch {
      res.status(400).send({
        messsage: "Aconteceu algo, favor verificar as informações enviadas.",
      });
    }
  });
  router.delete("/:document", async (req: Request, res: Response) => {
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

export default router;
