import express from "express";

import { routers } from "./routes/categoriaRoutes.js";

const app = express();

app.use(express.json());

app.use(routers);

app.listen(3000, () => {
    console.log(`Servidor rodando`);
  });