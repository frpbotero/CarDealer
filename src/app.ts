import express, { request } from "express";
import cors from "cors";
import connection from "./config/database";

import userRouter from "./routes/user.route";
import carRouter from "./routes/car.route";
import authRouter from "./routes/auth.route";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/car", carRouter);
app.use("/auth", authRouter);

connection
  .then(() => {
    console.log("Banco de dados Conectado!");
    app.listen(port, () => {
      console.log("Aplicação online na porta:", port);
    });
  })
  .catch((error) => console.log(error));
