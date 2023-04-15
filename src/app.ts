import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.listen(port, () => console.log("Server funcionando"));
