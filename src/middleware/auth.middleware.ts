import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.SECRET_KEY || "";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send({ message: "Acesso negado!" });
  }
  const tokenSplited = token.split("Bearer ");
  const decoded = jwt.verify(tokenSplited[1], secretKey);

  if (!decoded) return res.status(401).send({ message: "Acesso negado!" });
  next();
}
