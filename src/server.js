
import express from "express";
import { routes as localRoutes } from "./routes/LocalRoutes.js";
import { routers as categoriasRoutes } from "./routes/categoriaRoutes.js";

const app = express();

app.use(express.json());

app.use(localRoutes);
app.use(categoriasRoutes);

app.listen(3000, () => {
    console.log("Server running")
})