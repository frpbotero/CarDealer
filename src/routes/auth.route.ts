import { Request, Response, Router } from "express";
import UserService from "../services/user.service";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("OK");
});

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await UserService.auth(email, password);
    res.status(200).send({ token });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.post("/recovery", async (req: Request, res: Response) => {
  const { email } = req.body;

  const question = UserService.recovery(email);

  res.send(question);
});
// router.post("/resetPass", async (req: Request, res: Response) => {
//   const { email } = req.body;
// });

export default router;
