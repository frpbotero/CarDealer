import { Request, Response, Router } from "express";
import AuthService from "../services/auth.service";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await AuthService.auth(email, password);
    res.status(200).send({ token });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.post("/recovery", async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const question = await AuthService.recovery(email);

    res.status(200).send(question);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});
router.post("/reset", async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const user = await AuthService.resetPass(body);

    res.status(200).send({ message: "Senha atualizada com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: "Usuário não encontrado!" });
  }
});

export default router;
