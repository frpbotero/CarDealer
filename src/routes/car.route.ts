import { Request, Response, Router } from "express";
import CarService from "../services/car.service";
import { authMiddleware } from "../middleware/auth.middleware";
import { permissionMiddleware } from "../middleware/permission.middleware";

const router = Router();

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  const cars = await CarService.getAll();
  res.status(200).send(cars);
});
router.get("/:id", authMiddleware, async (req: Request, res: Response) => {
  const car = await CarService.getById(req.params.id);
  if (!car) {
    return res.status(404).send({ message: "Carro não encontrado!" });
  }
  res.status(200).send(car);
});
router.post(
  "/",
  permissionMiddleware(["ADM", "Colab"]),
  async (req: Request, res: Response) => {
    try {
      await CarService.create(req.body);
      res.status(201).send({ message: "Carro criado com sucesso!" });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  }
);
router.put(
  "/:id",
  permissionMiddleware(["ADM"]),
  async (req: Request, res: Response) => {
    try {
      const car = await CarService.getById(req.params.id);
      if (!car) {
        return res.status(404).send({ message: "Carro não encontrado!" });
      }
      await CarService.update(req.params.id, req.body);
      res.status(200).send({ message: "Carro atualizado com sucesso!" });
    } catch {
      res.status(400).send({
        messsage: "Aconteceu algo, favor verificar as informações enviadas.",
      });
    }
  }
);
router.delete(
  "/:id",
  permissionMiddleware(["ADM"]),
  async (req: Request, res: Response) => {
    try {
      const car = await CarService.getById(req.params.id);
      if (!car) {
        return res.status(404).send({ message: "Carro não encontrado!" });
      }
      await CarService.delete(req.params.id);

      res.status(200).send({ message: "Carro excluído com sucesso!" });
    } catch {
      res.status(400).send({
        message: "Aconteceu algo, favor verificar as informações enviadas.",
      });
    }
  }
);

export default router;
