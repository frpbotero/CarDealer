import express from "express";
import cors from "cors";
import connection from "./config/database";

import userRouter from "./routes/user.route";
import carRouter from "./routes/car.route";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/car", carRouter);

connection
  .then(() => {
    console.log("Banco de dados Conectado!");
    app.listen(port, () => console.log("Server funcionando"));
  })
  .catch((error) => console.log(error));
