import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import UserService from "../services/user.service";

dotenv.config();

const secretKey = process.env.SECRET_KEY || "";

export function permissionMiddleware(permission: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).send({ message: "Acesso negado!" });
    }
    const tokenSplited = token.split("Bearer ");
    const decoded = jwt.decode(tokenSplited[1]);
    const decodedInfo = JSON.parse(JSON.stringify(decoded));
    const user = await UserService.getById(decodedInfo.id);
    console.log(decodedInfo.id);

    if (!user) {
      return res.status(401).send({ message: "Usuário não identificado!" });
    } else {
      if (user.profile && permission.includes(user.profile)) {
        next();
      } else {
        return res.status(401).send({ message: "Usuário sem autorização!" });
      }
    }
  };
}
